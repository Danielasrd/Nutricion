    # Nutricion/Backend/nutricion/Dockerfile
    # Usar una imagen base de OpenJDK para Java 17
    FROM openjdk:17-jdk-slim

    # Establecer el directorio de trabajo dentro del contenedor
    WORKDIR /app

    # Copiar el wrapper de Maven (mvnw y .mvn) si están en la carpeta 'nutricion'
    # Asegúrate de que estos archivos existan en la misma carpeta que este Dockerfile
    COPY mvnw .
    COPY .mvn .mvn

    # Copiar el archivo pom.xml para descargar las dependencias primero
    COPY pom.xml .

    # Copiar el resto del código fuente
    COPY src src/

    # Construir la aplicación Spring Boot
    # Usamos -Dmaven.test.skip=true para saltar los tests durante la construcción de la imagen
    RUN ./mvnw package -Dmaven.test.skip=true

    # Exponer el puerto en el que se ejecuta la aplicación Spring Boot
    EXPOSE 8080

    # Comando para ejecutar la aplicación Spring Boot
    # El *.jar es para que funcione sin importar la versión en el nombre
    ENTRYPOINT ["java", "-jar", "target/*.jar"]
    