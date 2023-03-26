# Proyecto de gestión financiera personal con Node.js, Passport.js, Jest.js y PostgreSQL
Este proyecto tiene como objetivo crear una aplicación web que permita a los usuarios gestionar sus finanzas personales de forma fácil y segura. El proyecto utiliza las siguientes tecnologías:

- Node.js como entorno de ejecución de JavaScript en el servidor.
- Express como framework web para crear la API REST.
- Passport.js como middleware de autenticación basado en estrategias.
- PostgreSQL como sistema de gestión de bases de datos relacionales.
- Sequelize como ORM (Object-Relational Mapping) para interactuar con la base de datos.
- Jest.js como framework de pruebas para realizar pruebas unitarias, de integración y de rendimiento.
- Supertest como biblioteca para realizar peticiones HTTP a la API en las pruebas.

## Funcionalidades
El proyecto implementa las siguientes funcionalidades:

- Registro de usuario y autenticación utilizando Passport.js con la estrategia local, que permite verificar el usuario y la contraseña con la base de datos.
- Registro y seguimiento de gastos, que permite al usuario ingresar los gastos que realiza en diferentes categorías y ver un resumen de sus gastos por mes, por categoría o por fecha.
- Registro y seguimiento de ingresos, que permite al usuario ingresar los ingresos que recibe en diferentes fuentes y ver un resumen de sus ingresos por mes, por fuente o por fecha.
- Presupuesto y seguimiento de ahorros, que permite al usuario establecer un presupuesto mensual para sus gastos e ingresos y ver cuánto ha ahorrado o gastado en relación al presupuesto.
- Alertas y notificaciones sobre gastos, ingresos y ahorros, que permite al usuario recibir mensajes en la aplicación o por correo electrónico cuando se producen eventos relevantes, como superar el presupuesto, alcanzar una meta de ahorro o recibir un ingreso extraordinario.


## Pruebas
El proyecto utiliza Jest.js como framework de pruebas para realizar pruebas unitarias, de integración y de rendimiento. Las pruebas se encuentran en la carpeta tests y se pueden ejecutar con el comando npm test. Las pruebas cubren los siguientes aspectos:

- Pruebas unitarias de las funciones y los modelos del proyecto, que verifican el correcto funcionamiento de la lógica de negocio y la interacción con la base de datos.
- Pruebas de integración de la API REST, que verifican el correcto funcionamiento de los endpoints y las respuestas HTTP utilizando Supertest para realizar peticiones al servidor.
- Pruebas de rendimiento de la API REST, que verifican el tiempo de respuesta y la carga del servidor utilizando herramientas como Artillery o Loadtest.


## Instalación
Para instalar el proyecto se deben seguir los siguientes pasos:

- Clonar el repositorio del proyecto con el comando git clone https://github.com/dev-dvdgzlez/personal_financial_app_backend.git
- Instalar las dependencias del proyecto con el comando npm install.
- Crear una base de datos PostgreSQL con el nombre <proyecto> y configurar las credenciales en el archivo config/config.json.
- Ejecutar las migraciones para crear las tablas en la base de datos con el comando npx sequelize-cli db:migrate.
- Ejecutar los seeders para insertar datos de prueba en la base de datos con el comando npx sequelize-cli db:seed:all.
- Iniciar el servidor con el comando npm start o npm run dev para utilizar nodemon.

## Uso
Para utilizar el proyecto se pueden seguir los siguientes pasos:

- Abrir un navegador web y acceder a la dirección http://localhost:3000/.
- Registrarse como nuevo usuario o iniciar sesión con un usuario existente.
- Navegar por las diferentes secciones de la aplicación: gastos, ingresos, presupuesto y alertas.
- Agregar, editar o eliminar gastos e ingresos según se desee.
- Establecer un presupuesto mensual para los gastos e ingresos y ver el progreso del ahorro.
- Configurar las alertas y notificaciones que se quieran recibir.
