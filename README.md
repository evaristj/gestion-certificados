# GestionCertificados

Este proyecto ha sido desarrollado como trabajo final del Bootcamp con GeeksHubs Academy.

[DEMO del preoyecto](https://www.youtube.com/watch?v=suLfYeIugZY)

## Funcionalidades

En el vídeo habrás podido comprobar todas las funcionalidades que tiene la aplicación, a continuación te detallo algunas:

* Control de acceso con usuario y contraseña.
* Role de usuarios (admin y users).
* Carga y almacena certificados en base de datos.
 * Lee la información del certificado la codifica en base64, y el resto de información lo rellena el usuario para su almacenamiento en base de datos.
 * Puedes descargar los certificados en formato .p12.
 * Marca como eliminados los certificados.
 * Ordena por alias, id-organización, fecha, etc.
 * Muestra los caducados, próximos a caducar, eliminados, activos, etc.
 * Puedes crear incidencias en Jira de tickets a punto de caducar.
 * Prueba que tienes conexión con Jira.
 * Puedes modificar tus datos en Jira, nombre, contraseña, proyecto, componente, etc.
 * Tiene un proceso automático que revisa cada 15 minutos con la base de datos que un certificado esté a punto de caducar, esté caducado o esté activo.
 * Tiene control de rutas, guards.
 
 #### Para que funcione con el backend es necesario descargarlo y arrancar una imagen en el docker con PostgreSQL.

## Development server

Arranca con `npm run start` para entorno de desarrollo. Navega hacia `http://localhost:4200/`. La aplicación se recargará automáticamente cuando realices cambios.



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
