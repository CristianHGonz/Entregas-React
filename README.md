🛍️ Capriccio - Ecommerce de Accesorios Femeninos

Capriccio es una aplicación web desarrollada con React que simula un ecommerce de accesorios femeninos.
Permite visualizar productos, filtrarlos por categoría, gestionar un carrito de compras con validación de stock y generar una orden de compra almacenada en Firebase.

🚀 Características principales
🏠 Página principal

Exhibición de todos los productos disponibles.

Filtrado dinámico por categoría.

Diseño moderno utilizando TailwindCSS, DaisyUI y CSS Modules.

📦 Detalle de producto

Al hacer click en "Más info":

Visualización completa del producto:

Imagen (ACLARACION las imagenes fueron cargadas en https://imageshack.com/ y duran solo 30 días desde el 28-02-2026)

Descripción

Precio

Stock disponible

Selector de cantidad:

Botón para sumar (validación de stock antes de comprar)

Botón para restar (no puede restar a un N° menos a 1)

Validaciones:

✅ Al agregar el producto → Notificación "Producto agregado al carrito"

🛒 Carrito de compras

En el carrito el usuario puede:

➕ Sumar unidades

➖ Restar unidades (si llega a 0 se elimina automáticamente)

🗑 Eliminar un producto completamente

🧹 Vaciar el carrito completo

Se muestra ventana con mensaje de carrito vacio

Se ofrece botón para volver al menú principal

✅ Confirmar compra

Antes de continuar se valida nuevamente el stock disponible

📝 Proceso de compra

Validación de stock antes de proceder.

Formulario de envío y facturación:

Nombre

Dirección

Localidad

Email

Contacto

Se genera un ID único de compra.

Se muestra mensaje indicando dónde comunicarse en caso de necesitar ayuda.

La ventana se cierra automáticamente en 10 segundos.

Redirección automática al menú principal.

🔔 Sistema de notificaciones

Se implementaron notificaciones utilizando Notistack, mostrando mensajes en los siguientes casos:

Producto agregado al carrito.

Stock no disponible.

Confirmación de compra.

Errores de validación.

🎨 Diseño y estilos

Navbar desarrollado con DaisyUI.

Estilos base con TailwindCSS.

Estilado principal con CSS Modules.

Componentes visuales adicionales con Material UI.

Spinners de carga con React Spinners.

🛠️ Tecnologías utilizadas

React 19

React Router 7

Firebase (Firestore)

TailwindCSS 4

DaisyUI

CSS Modules

Material UI

Notistack

React Spinners
