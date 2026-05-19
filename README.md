# Instagram Cat Clone 

Proyecto realizado en React inspirado en la interfaz de Instagram, utilizando imágenes de gatos obtenidas desde una API externa.

# Tecnologías usadas

* React
* JavaScript
* CSS
* Axios
* React Icons
* Vite



# API utilizada

Se utilizó The Cat API:

https://api.thecatapi.com/v1/images/search?limit=12

# Componentes principales

* Header
* Sidebar
* Stories
* Feed
* Post
* Modal
* Profile

Cada componente tiene una responsabilidad distinta para mantener el código más ordenado y reutilizable.

# Hooks utilizados

## useState

Se utilizó para:

* guardar publicaciones
* manejar likes
* controlar el modal
* cambiar entre Home y Profile

## useEffect

Se utilizó para cargar las imágenes desde la API al iniciar la aplicación.

# Funcionalidades

* Feed dinámico de publicaciones
* Perfil de usuario emulado
* Modal para ver publicaciones individualmente
* Sistema de likes
* Navegación entre Home y Profile
* Diseño inspirado en Instagram

# Perfil emulado

Se simuló un usuario logueado usando datos guardados en `user.js`.

El perfil muestra:

* foto
* username
* seguidores
* seguidos
* publicaciones
* biografía

# Visualización individual

Las publicaciones se pueden abrir mediante un modal que muestra:

* imagen ampliada
* likes
* caption
* comentarios

# Diseño de referencia

Link del Figma utilizado:

https://www.figma.com/community/file/1004033523744290376
# Cómo ejecutar el proyecto

Instalar dependencias:

npm install

Ejecutar proyecto:

npm run dev
