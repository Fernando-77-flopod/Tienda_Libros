const carrito = [];
const totalElement = document.getElementById('total');
const listaCarrito = document.getElementById('listaCarrito');

function agregarAlCarrito(titulo, precio) {
    carrito.push({ titulo, precio });
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;
    
    carrito.forEach((libro, index) => {
        const item = document.createElement('div');
        item.innerHTML = `${libro.titulo} - $${libro.precio} <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
        listaCarrito.appendChild(item);
        total += parseFloat(libro.precio);
    });

    totalElement.innerText = `Total: $${total}`;
}

document.getElementById('agregarLibroBtn').addEventListener('click', function () {
    const titulo = document.getElementById('tituloLibro').value.trim();
    const precio = document.getElementById('precioLibro').value.trim();
    const librosDisponibles = document.getElementById('librosDisponibles');

    // Validaciones
    if (titulo === '') {
        alert('El título del libro no puede estar vacío.');
        return;
    }

    if (!/^\d+(\.\d{1,2})?$/.test(precio) || parseFloat(precio) <= 0) {
        alert('El precio debe ser un número mayor a 0 con hasta dos decimales.');
        return;
    }

    // Crear el elemento del libro disponible
    const nuevoLibro = document.createElement('div');
    nuevoLibro.classList.add('libro');
    nuevoLibro.innerHTML = `
        <span>${titulo} - $${precio}</span>
        <button onclick="agregarAlCarrito('${titulo}', ${precio})">Agregar al carrito</button>
    `;

    librosDisponibles.appendChild(nuevoLibro); // Agregar a "Libros Disponibles"

    // Limpiar los campos de entrada
    document.getElementById('tituloLibro').value = ''; 
    document.getElementById('precioLibro').value = ''; 
});