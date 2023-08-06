import uuid
import cloudinary.uploader
import cloudinary
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from waitress import serve
import py_eureka_client.eureka_client as eureka_client
from functools import wraps
import jwt
app = Flask(__name__)

CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://partner:123@partner-db:5433/partner-db'

db = SQLAlchemy(app)
JWTManager(app)


# credentail  cloudinary
cloudinary.config(cloud_name='dxvv1kmvf', api_key='783156723597893',
                  api_secret='rwfOmk1wbQ1dwb3TNANhAlEUMfs')

eureka_client.init(
                    eureka_server="http://eureka-server:8761",
                   app_name="partner-service",
                   instance_host='eureka',
                   
                   instance_port=4040)


class Partner(db.Model):
    __tablename__ = 'partner'
    id = db.Column(db.String, primary_key=True)
    storeName = db.Column(db.String(255), nullable=False)
    location = db.Column(db.String(255), nullable=False)
    webUrl = db.Column(db.String(255), nullable=False)
    imageUrl = db.Column(db.String(255), nullable=False)
    imagePublicId = db.Column(db.String(255), nullable=False)


    def dict(self):
        return {
            'id': self.id,
            'storeName': self.storeName,
            'location': self.location,
            'webUrl': self.webUrl,
            'imgeUrl': self.imageUrl,
            'imagePublicId': self.imagePublicId

        }


with app.app_context():
    db.create_all()


def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        token = None
        if request.headers['Authorization']:
            token = request.headers['Authorization'].split(" ")[1]
        if token == None:  # throw error if no token provided
            return jsonify({"message": "A valid token is missing!"}), 401
        try:

            data = jwt.decode(
                token, 'twcibNhzcHgrqWaGsBY5eA==', algorithms=['HS256'])

        except:
            return jsonify({"message": "Invalid token!"}), 401
         # Return the user information attached to the token
        return f(*args, **kwargs)
    return decorator


@app.route('/', methods=['GET', 'POST'])
@token_required
def list_create():
    if request.method == 'GET':
        users = Partner.query.all()

        return jsonify(data=[user.dict() for user in users], message="Create partner successful")

    if request.method == 'POST':
        storeNameDto = request.form.get('storeName', None)
        locationDto = request.form.get('location', None)
        webUrlDto = request.form.get('webUrl', None)
        try:
            file_to_upload = request.files['logo']
        except:
            return jsonify(message="image is require"), 400

        if storeNameDto == None:
            return jsonify(message="store name is require"), 400
        if locationDto == None:
            return jsonify(message="location is require"), 400
        if webUrlDto == None:
            return jsonify(message="Web url is require"), 400
        upload_result = cloudinary.uploader.upload(
            file_to_upload, folder="/partner")

        part = Partner(
            id=str(uuid.uuid4()),
            location=locationDto,
            storeName=storeNameDto,
            webUrl=webUrlDto,
            imageUrl=upload_result["url"],
            imagePublicId=upload_result["public_id"]
        )
        db.session.add(part)
        db.session.commit()
        return jsonify(data=part.dict(), message="Create partner successful")


@app.route('/<id>', methods=['DELETE', 'PUT', 'GET'])
@token_required
def delete(id):
    if id == None:
        return jsonify(message="id is require!"), 400
    if request.method == 'DELETE':
        part = Partner.query.filter_by(id=id).first()
        dataPartnerJson=part.dict()
        imgId=dataPartnerJson['imagePublicId']
        upload_result = cloudinary.uploader.destroy(imgId,folder="/partner")
        if upload_result["result"] != "ok":
            return jsonify(message="Delete partner fail"), 404
        deletePartner = Partner.query.filter_by(id=id).delete()
        db.session.commit()
        return jsonify(data=part.dict(), message="Delete partner successful"), 200

    if request.method == 'GET':
        part = Partner.query.filter_by(id=id).first()
        return jsonify(data=part.dict(), message="Get partner successful"), 200

    if request.method == 'PUT':
        storeNameDto = request.form.get('storeName', None)
        locationDto = request.form.get('location', None)
        webUrlDto = request.form.get('webUrl', None)
        file_to_upload = None
        try:
            file_to_upload = request.files['logo']
        except:
            file_to_upload = None

        if storeNameDto == None and file_to_upload == None and locationDto == None and webUrlDto == None:
            return jsonify(message="bad request"), 400
        if file_to_upload == None:
            updatePartner = Partner.query.filter_by(id=id).first()
            updatePartner.storeName = storeNameDto
            updatePartner.location = locationDto
            updatePartner.webUrl = webUrlDto
            db.session.commit()
            return jsonify(data=updatePartner.dict(), message="Update partner successful"), 200
        oldData = Partner.query.filter_by(id=id).first()
        jsonOld=oldData.dict()

        upload_result = cloudinary.uploader.destroy(
            jsonOld['imagePublicId'])

        upload_result = cloudinary.uploader.upload(
            file_to_upload)

        oldData.imageUrl = upload_result['url']
        oldData.imagePublicId = upload_result['public_id']
        oldData.storeName = storeNameDto
        oldData.location = locationDto
        oldData.webUrl = webUrlDto
        db.session.commit()

        return jsonify(data=oldData.dict(), message="Update partner successful"), 200


if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=4040)
