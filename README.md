# Proyecto de Gestión de Usuarios y Publicaciones

## Descripción
Este proyecto es una aplicación web para gestionar usuarios, sus perfiles y sus publicaciones. Permite a los usuarios registrarse, iniciar sesión, buscar otros usuarios por nombre, y explorar sus perfiles. Además, los usuarios pueden crear nuevas publicaciones y ver los detalles de cada una. La aplicación está diseñada con una interfaz amigable y fácil de usar, con funcionalidades como la validación de contraseñas y notificaciones de error.

Este sistema está basado en React para la interfaz de usuario y utiliza Redux para manejar el estado global, junto con React Router para la navegación entre diferentes secciones de la aplicación.

## ¿Qué puedes hacer en esta aplicación?
- **Registrarte**: Los usuarios pueden crear una cuenta ingresando su nombre, correo electrónico y una contraseña. Si las contraseñas no coinciden, se muestra un error.
- **Iniciar sesión**: Una vez registrado, los usuarios pueden iniciar sesión con su correo electrónico y contraseña.
- **Buscar usuarios**: Puedes buscar usuarios por nombre y explorar los resultados.
- **Ver perfil**: Cada usuario tiene un perfil que muestra su información personal y las publicaciones que ha creado.
- **Crear publicaciones**: Los usuarios pueden agregar nuevas publicaciones para compartir con la comunidad.
- **Ver publicaciones detalladas**: Cada publicación tiene su propia página de detalles donde se puede obtener más información sobre el contenido y el autor.

## Tabla de Contenidos
1. [Características](#características)
2. [Requisitos Previos](#requisitos-previos)
3. [Uso](#uso)
4. [Estructura de Archivos](#estructura-de-archivos)
5. [Rutas Disponibles](#rutas-disponibles)
6. [Licencia](#licencia)

## Descripción
Este proyecto es una aplicación web para gestionar usuarios, sus perfiles y sus publicaciones. Permite a los usuarios registrarse, iniciar sesión, buscar otros usuarios por nombre, y explorar sus perfiles. Además, los usuarios pueden crear nuevas publicaciones y ver los detalles de cada una. La aplicación está diseñada con una interfaz amigable y fácil de usar, con funcionalidades como la validación de contraseñas y notificaciones de error.

Este sistema está basado en React para la interfaz de usuario y utiliza Redux para manejar el estado global, junto con React Router para la navegación entre diferentes secciones de la aplicación.

## Requisitos Previos
Asegúrate de tener instalados los siguientes programas antes de comenzar:
- **Node.js**
- **npm** o **yarn**

## Estructura de Archivos
```plaintext
📦src
 ┣ 📂components
 ┃ ┣ 📂Register
 ┃ ┃ ┗ 📜Register.jsx
 ┃ ┣ 📂Search
 ┃ ┃ ┗ 📜Search.jsx
 ┃ ┣ 📂Header
 ┃ ┃ ┗ 📜Header.jsx
 ┃ ┣ 📂Footer
 ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┣ 📂Home
 ┃ ┃ ┗ 📜Home.jsx
 ┃ ┣ 📂Login
 ┃ ┃ ┗ 📜Login.jsx
 ┃ ┣ 📂Profile
 ┃ ┃ ┗ 📜Profile.jsx
 ┃ ┣ 📂AddPost
 ┃ ┃ ┗ 📜AddPost.jsx
 ┃ ┣ 📂PostDetail
 ┃ ┃ ┗ 📜PostDetail.jsx
 ┣ 📂features
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜authSlice.js
 ┃ ┣ 📂posts
 ┃ ┃ ┣ 📜postSlice.js
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.js
 ┗ 📜index.scss
```
## Rutas Disponibles

| Ruta                        | Componente   | Descripción                                  |
|-----------------------------|--------------|----------------------------------------------|
| `/`                         | Home         | Página principal.                           |
| `/register`                 | Register     | Formulario de registro de nuevos usuarios.  |
| `/login`                    | Login        | Formulario de inicio de sesión.             |
| `/search/:name`             | Search       | Búsqueda de usuarios por nombre.            |
| `/profile/:id`              | Profile      | Perfil de usuario especificado por ID.      |
| `/addPost`                  | AddPost      | Página para crear nuevas publicaciones.     |
| `/postDetail/:id`           | PostDetail   | Detalle de la publicación seleccionada.     |

## Licencia
Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
