# Utilizar una imagen base de Java 17
FROM openjdk:17

# Argumento que representa el archivo JAR de tu aplicación
ARG JAR_FILE=target/*.jar

# Copiar el archivo JAR de tu aplicación en la imagen
COPY ${JAR_FILE} app.jar

# Exponer el puerto en el que se ejecuta tu aplicación
EXPOSE 8081

# Comando para ejecutar la aplicación
ENTRYPOINT ["java","-jar","/app.jar"]
