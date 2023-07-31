FROM python:3.11.1-slim
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
RUN python -m pip install --upgrade pip
CMD python ./app.py
