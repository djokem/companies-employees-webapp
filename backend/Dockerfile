FROM alpine:latest

WORKDIR /usr/app

COPY demo-0.jar ./

RUN apk add openjdk8

ENV JAVA_HOME /usr/lib/jvm/java-1.8-openjdk8

ENV PATH $PATH:$JAVA_HOME/bin

EXPOSE 8080

CMD ["java","-jar","/usr/app/demo-0.jar"]


