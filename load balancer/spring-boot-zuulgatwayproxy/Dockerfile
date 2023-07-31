
FROM maven:3.6.3-jdk-8-slim
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN apt-get update && apt-get install dos2unix && dos2unix /usr/local/bin/entrypoint.sh && chmod +x /usr/local/bin/entrypoint.sh

#Start application
WORKDIR /usr/src/mymaven
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["bash"]

# FROM openjdk:8-jdk-alpine
# ADD target/spring-boot-zuulgatwayproxy-0.0.1-SNAPSHOT.jar app.jar
# ENTRYPOINT ["java","-jar","app.jar"]