function buscarProductos() {
    const input = document.getElementById("busqueda").value.toLowerCase();
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = "";

    const productosFiltrados = !input.trim()
        ? productos // mostrar todos si el input está vacío
        : productos.filter(producto => {
            const nombre = producto.productName?.toLowerCase() || "";
            const descripcion = producto.metaTagDescription?.toLowerCase() || "";
            const eans = producto.ProductMultiEan || [];

            const coincideEnNombre = nombre.includes(input);
            const coincideEnDescripcion = descripcion.includes(input);
            const coincideEnEan = eans.some(ean => ean.includes(input));

            return coincideEnNombre || coincideEnDescripcion || coincideEnEan;
        });

    if (productosFiltrados.length === 0) {
        resultados.innerHTML = `<p>No se encontraron resultados para "<strong>${input}</strong>"</p>`;
        return;
    }

    productosFiltrados.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "card";

        tarjeta.innerHTML = `
            <h3>${producto.productName}</h3>
            <p>${producto.metaTagDescription}</p>
            <div class="ean-tags">
                ${producto.ProductMultiEan.map(ean => `<span class="ean-tag">${ean}</span>`).join("")}
            </div>
        `;

        resultados.appendChild(tarjeta);
    });
}

window.addEventListener("DOMContentLoaded", buscarProductos);