
document.addEventListener("DOMContentLoaded", () => {
  fetch("../data/galicia-migrante.json")
    .then(res => res.json())
    .then(data => mostrarProductos(data))
    .catch(err => console.error("Error cargando productos:", err));

  actualizarContadorCarrito();
});

function mostrarProductos(productos) {
  const contenedor = document.getElementById("productos-container");
  productos.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("producto-card");
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.titulo}">
      <h3>${producto.titulo}</h3>
      <p>${producto.descripcion}</p>
      <p class="precio">$ ${producto.precio}</p>
      <button onclick='agregarAlCarrito(${JSON.stringify(producto)})'>Agregar al carrito</button>
    `;
    contenedor.appendChild(card);
  });
}

function agregarAlCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const index = carrito.findIndex(p => p.id === producto.id);

  if (index >= 0) {
    carrito[index].cantidad += 1;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContadorCarrito();
  alert(`Agregado: ${producto.titulo}`);
}

function actualizarContadorCarrito() {
  const contador = document.getElementById("carrito-contador");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  if (contador) contador.textContent = total;
}
