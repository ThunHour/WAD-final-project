FROM openjdk:8-jdk-alpine

WORKDIR /bezkoder-app
COPY ./target/eureka-server-0.0.1-SNAPSHOT.jar /bezkoder-app/app.jar
CMD ["java", "-jar", "app.jar"]