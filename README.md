﻿# Prueba Tecnica

Para poder ejecutar este proyecto, se debe tener en cuenta las siguientes herramientas:

Node JS v20.9.0
Yarn (para instalarlo se puede realizar usando el comando npm install --global yarn)


En la carpeta "config" podra encontrar el JSON de configuracion para la conexion con la base de datos. Es necesario cambiarlos para conectar a una base de datos correspondiente (Puede estar vacia)


Esta API comienza a funcionar una vez esten realizadas las migraciones y semillas para la base de datos. Para lograr esto, se debe ejecutar los siguientes comandos:


`yarn db:migrate`

`yarn db:seed`

Al realizar esto, se generara un usuario por defecto.

User: stebanlondo75@gmail.com

Password: PruebasDev01.

Si esta utilizando Visual Studio Code, puede instalar el Plugin "Thunder Client" para realizar las pruebas de las peticiones a la API. Es necesario iniciar sesión.

Rutas Disponibles para pruebas:

http://localhost:5000/api/users/login

http://localhost:5000/api/users

http://localhost:5000/api/users

http://localhost:5000/api/users
