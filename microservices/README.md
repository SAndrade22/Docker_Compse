# Proyecto Microservicios 
Este proyecto consta de dos microservicios principales: `cliente-service` y `producto-service`. A continuación se detallan los pasos para ejecutar cada uno de ellos, así como las herramientas de monitoreo y documentación asociadas. 
## Pre-requisitos 
- Maven 
- Docker 
- Docker Compose 
## Instalación y Ejecución 
### 1. Dependencias Antes de ejecutar los microservicios, es necesario instalar las dependencias. 
Para ello, ejecuta los siguientes comandos en la raíz de cada microservicio (`cliente-service` y `producto-service`):
 ```./mvnw dependency:tree ```
 ```./mvnw clean package ``` 
 Estos comandos realizan dos tareas principales: 
 - `dependency:tree`: Muestra el árbol de dependencias del proyecto. 
 - `clean package`: Limpia el proyecto y empaqueta el compilado en formato JAR. 
 ### 2. Construcción de Imágenes Docker Con las dependencias resueltas, el siguiente paso es construir las imágenes Docker para cada servicio. 
 Utiliza los siguientes comandos: 
 ```docker build -t cliente-service .``` 
 ```docker build -t producto-service . ``` 
 Esto construirá las imágenes Docker necesarias para `cliente-service` y `producto-service`, etiquetándolas respectivamente. 
 ### 3. Ejecución con Docker Compose Una vez construidas las imágenes, puedes ejecutar los servicios utilizando Docker Compose: 
 ```docker-compose up --build ``` 
 Este comando levantará todos los servicios definidos en el archivo docker-compose.yml, incluyendo cualquier dependencia como bases de datos o servicios de terceros. 
 ## Acceso a los Servicios Una vez en ejecución, los servicios estarán accesibles a través de los siguientes enlaces: 
 - **Cliente Service**: [Swagger UI](http://localhost:8082/swagger-ui/index.html) 
 - **Producto Service**: [Swagger UI](http://localhost:8081/swagger-ui/index.html) 
 Estas interfaces de Swagger UI te permitirán interactuar con cada microservicio y probar sus diferentes endpoints. 
 ## Herramientas de Monitoreo 
 - **Jaeger**: Para el seguimiento distribuido, Jaeger está disponible en [http://localhost:16686](http://localhost:16686) 
 Jaeger te permitirá monitorear y rastrear las solicitudes que pasan a través de los microservicios. 
 --- Siguiendo estos pasos, podrás ejecutar y interactuar con los microservicios de `cliente-service` y `producto-service` en tu entorno local.
