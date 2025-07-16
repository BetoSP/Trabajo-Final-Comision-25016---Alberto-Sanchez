
document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();
});

function mostrarCarrito() {
  const contenedor = document.getElementById("carrito-container");
  const totalContainer = document.getElementById("carrito-total");
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p style='text-align:center'>Su carrito está vacío.</p>";
    totalContainer.textContent = "";
    return;
  }

  contenedor.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, index) => {
    const item = document.createElement("div");
    item.classList.add("producto-card");
    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.titulo}">
      <h3>${producto.titulo}</h3>
      <p>${producto.descripcion}</p>
      <p class="precio">Precio unitario: $${producto.precio}</p>
      <p>Cantidad: 
        <button onclick="cambiarCantidad(${index}, -1)">➖</button>
        <strong>${producto.cantidad}</strong>
        <button onclick="cambiarCantidad(${index}, 1)">➕</button>
      </p>
      <p>Subtotal: $${producto.precio * producto.cantidad}</p>
      <button onclick="eliminarProducto(${index})">🗑️ Eliminar</button>
    `;
    contenedor.appendChild(item);
    total += producto.precio * producto.cantidad;
  });

  totalContainer.textContent = "Total: $ " + total.toLocaleString();
}

function cambiarCantidad(index, delta) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito[index].cantidad += delta;
  if (carrito[index].cantidad < 1) carrito[index].cantidad = 1;
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function eliminarProducto(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function vaciarCarrito() {
  if (confirm("¿Esta seguro de que quiere vaciar el carrito?")) {
    localStorage.removeItem("carrito");
    mostrarCarrito();
  }
}

function finalizarCompra() {
  alert("¡Gracias por su compra! Aqui finaliza la simulación de una compra exitosa.");
  localStorage.removeItem("carrito");
  window.location.href = "../index.html";
}
