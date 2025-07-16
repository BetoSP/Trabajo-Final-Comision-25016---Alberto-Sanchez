Proyecto Final - Centro Lalín, Agolada y Silleda
Actividades Culturales & Tienda Ecomerce

Este proyecto es una página web desarrollada con HTML y CSS que presenta una oferta de actividades, reseñas de las mismas con su correpondiente solicitud de informacion adicional y un formulario general de contacto. 
El objetivo es practicar el uso de etiquetas semánticas, formularios, estilos responsivos con Flexbox y Grid, y subir el sitio a un hosting gratuito.
En segunda instancia se ha incorporado una tienda virtual de e-commerce con su correspondiente carrito de 
compra y demas funcionalidades dinámicas.

---

## ✅ HTML
- Estructura semántica completa: `header`, `nav`, `main`, `section`, `footer`
- Navegación entre páginas: `index.html`, `tienda.html`, `carrito.html`, `contacto.html`
- Todas las páginas correctamente enlazadas
- Estilos externos con Google Fonts y backgrounds aplicados.

## ✅ CSS
- Archivo `style.css` externo, con variables y estructura modular
- Fondo con degradado (gradient)
- Cards y botones con `box-shadow`, `border-radius`, `hover`
- Uso de Grid para `actividades`, `tienda` y `carrito`
- Flexbox aplicado en navegación y layouts

## ✅ Diseño Responsivo
- Adaptado con Media Queries para tablets y móviles
- Layouts con Grid y Flexbox
- Cards responsivas (actividades, productos y carrito)
- Imágenes con `aspect-ratio` para mantener proporción

## ✅ JavaScript
- Archivo separado `fetch-gmigrante.js` para consumir API simulada
- `carrito.js` para lógica de carrito:
  - Agregar productos
  - Modificar cantidades
  - Eliminar productos
  - Mostrar subtotales y total
- Contador dinámico en ícono de carrito

## ✅ API REST simulada
- Archivo `galicia-migrante.json` ubicado en `/data/`
- Contiene productos de la tienda con: `titulo`, `descripcion`, `precio`, `imagen`
- Consumida vía `fetch()`

## ✅ Formulario de contacto
- Formulario funcional mediante Formspree
- Incluye campos: nombre, email, teléfono, mensaje
- También se incluye formulario individual por actividad
- Cada formulario incluye un campo prellenado con la actividad

## ✅ Multimedia y Accesibilidad
- Imágenes con atributos `alt`
- Navegación por teclado
- Buen contraste y fuente legible
- Íconos y multimedia visual integrados (logo, hero, productos)

## ✅ Estructura del proyecto
```
/css/style.css
/js/fetch-gmigrante.js
/js/carrito.js
/data/galicia-migrante.json
/asset/images/
/pages/tienda.html
/pages/carrito.html
/pages/contacto.html
index.html
README.md
```
