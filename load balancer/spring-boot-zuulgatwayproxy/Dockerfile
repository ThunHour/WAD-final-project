# FROM maven:3.8.2-jdk-8

# WORKDIR /bezkoder-app
# COPY . .
# RUN mvn clean install

# CMD mvn spring-boot:run

FROM openjdk:8-jdk-alpine
ADD target/spring-boot-zuulgatwayproxy-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]