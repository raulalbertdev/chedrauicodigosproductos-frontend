var dataProductListGet = []
var UrlAPIFetch = "https://api.chedrauicodigosean.raulalbert.dev"

function guardarProductosLocalStorage () {
    
    let dataCurrentlyLocalStorage = JSON.parse(localStorage.getItem('productsList')) || []

    console.log('Tamaño aproximado de los datos guardados actualmente en LocalStorage:', dataCurrentlyLocalStorage.length / 1024 / 1024, 'MB');

    const todosProductos = [...dataProductListGet, ...dataCurrentlyLocalStorage];
    const dataProductsListSetLocalStorage = eliminarDuplicadosyOrdenarProductos (todosProductos)

    console.log('Tamaño aproximado de los datos últimos a guardar como nueva información en el LocalStorage:', dataProductsListSetLocalStorage.length / 1024 / 1024, 'MB');

    if (dataProductsListSetLocalStorage.length > 10 * 1024 * 1024) {
        console.warn('Los datos son muy grandes para localStorage, Google Chrome programado esto es para máximo 10 Mb');
    } else {
        localStorage.setItem('productsList', JSON.stringify(dataProductsListSetLocalStorage));
        console.log("Datos guardados en el Storage")
    }
}

function eliminarDuplicadosyOrdenarProductos (productsList) {
    const dataProductsNotDuplicated = productsList.filter((item, index, self) => 
        index === self.findIndex(obj => obj.productId === item.productId)
    );

    return [...dataProductsNotDuplicated].sort((a, b) => a.productName.localeCompare(b.productName));
}

async function buscarProducto() {
    const productId = document.getElementById("productoId").value;
    if (!productId) {
        alert("Por favor, ingrese un ID de producto.");
        return;
    }

    document.getElementById("resultado").innerHTML = '<div class="loader"></div>';

    try {
        const response = await fetch(`${UrlAPIFetch}/producto/${productId}`);
        const dataResponse = await response.json();
        const data = dataResponse[0]

        if (data.error) {
            document.getElementById("resultado").innerHTML = `
                <div class="error-message">${data.error}</div>
            `;
            console.log(data.error)
            return;
        }

        const eansMulti = data.MultiEan ? extraerEANs(data.MultiEan) : [];

        dataProductListGet.push({
            productId: data.productId,
            productName: data.productName,
            metaTagDescription: data.metaTagDescription,
            ProductMultiEan: eansMulti,
            imageUrl: data.items[0].images[0].imageUrl
        })

        // Mostrar lo0s datos en la página
        imprimirResultadoBusquedaProducto (data, eansMulti)

    } catch (error) {
        console.error("Error al obtener datos:", error);
        document.getElementById("resultado").innerHTML = `
            <div class="error-message">Error al consultar el producto. Por favor intente nuevamente.</div>
        `;
    }
}

function exportarListaSimpleTxt() {
    // Obtener datos de localStorage
    const productos = JSON.parse(localStorage.getItem('productsList')) || [];
    
    // Crear contenido del archivo
    const contenido = productos.map(p => 
        `"${p.productName}":  ${p.ProductMultiEan.join(', ')}`
    ).join('\n');
    
    // Crear y descargar archivo
    const blob = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lista_productos_ean.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

async function exportarAPDF() {

    dataProductListGet = JSON.parse(localStorage.getItem('productsList')) || [];

    if (dataProductListGet.length === 0) {
      alert('No hay productos para exportar');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/generar-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productos: dataProductListGet })
      });
      
      if (response.ok) {
        // Crear enlace de descarga
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'productos-chedraui.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        throw new Error('Error al generar PDF');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al exportar a PDF');
    }
}

const extraerEANs = (multiEanArray) => {
    const eans = [];
    
    multiEanArray.forEach(item => {
        if (typeof item === 'string') {
            // Si contiene guiones, separamos
            if (item.includes('-')) {
                item.split('-').forEach(ean => {
                    if (ean.trim()) eans.push(ean.trim());
                });
            } else {
                if (item.trim()) eans.push(item.trim());
            }
        }
    });
    
    return eans;
};

const imprimirResultadoBusquedaProducto = (dataProductResponse, eansMultiCodes) => {

    const tipoProducto = dataProductResponse?.['Tipo de producto']?.[0] ?? "Sin Información / No Aplica"
    const PaisOrigen = dataProductResponse?.['País de Origen']?.[0] ?? "Sin Información / No Aplica"
    const contenidoEmpaque = dataProductResponse?.['Contenido del empaque']?.[0] ?? "Sin Información / No Aplica"
    const tamanoPorcion = dataProductResponse?.['Tamaño de la Porción']?.[0] ?? "Sin Información / No Aplica"
    const precio = dataProductResponse.items?.[0].sellers?.[0].commertialOffer?.Price ?? 'Sin Información / No Aplica'
    const precioLista = dataProductResponse.items?.[0].sellers?.[0].commertialOffer?.ListPrice ?? 'Sin Información / No Aplica'
    const precioSinDescuento = dataProductResponse.items?.[0].sellers?.[0].commertialOffer?.PriceWithoutDiscount ?? 'Sin Información / No Aplica'
    const precioVentaCompleto = dataProductResponse.items?.[0].sellers?.[0].commertialOffer?.FullSellingPrice ?? 'Sin Información / No Aplica'

    document.getElementById("resultado").innerHTML = `
    <div class="product-container">
        <div class="product-header">
            <h2 class="product-name">${dataProductResponse.productName}</h2>
            <p class="product-description"><strong>Número de Referencia, SKU o Product ID:</strong> ${dataProductResponse.productId}</p>
            <p class="product-description"><strong>Descripción:</strong> ${dataProductResponse.metaTagDescription}</p>
            <p class="product-description"><strong>Tipo de Producto:</strong> ${tipoProducto}</p>
            <p class="product-description"><strong>Pais de Origen:</strong> ${PaisOrigen}</p>
            <p class="product-description"><strong>Contenido Empaque:</strong> ${contenidoEmpaque}</p>
            <p class="product-description"><strong>Tamaño de la Porción:</strong> ${tamanoPorcion}</p>
            <p class="product-description"><strong>Precio:</strong> $ ${precio}</p>
            <p class="product-description"><strong>Precio Lista:</strong> $ ${precioLista}</p>
            <p class="product-description"><strong>Precio sin descuento:</strong> $ ${precioSinDescuento}</p>
            <p class="product-description"><strong>Precio de venta completo:</strong> $ ${precioVentaCompleto}</p>
            <p class="product-link"><strong>Enlace:</strong> <a href="${dataProductResponse.link}" target="_blank">Click para Ver producto en tienda</a></p>
        </div>

        <h3 class="section-title">Códigos EAN</h3>
        <ul class="ean-list">
            ${eansMultiCodes.map(ean => `<li class="ean-tag">${ean}</li>`).join('')}
        </ul>
        <h3 class="section-title">Código EAN principal</h3>
        <ul class="ean-list">
            ${dataProductResponse.items.map(item => `<li class="ean-tag">${item.ean}</li>`).join('')}
        </ul>

        <h3 class="section-title">Imágenes del Producto</h3>
        <div class="img-list">
            ${dataProductResponse.items[0].images.map(image => `
                <img class="product-image" src="${image.imageUrl}" alt="${image.imageLabel}" width="200">
            `).join('')}
        </div>
    </div>
`;
}

async function exportarACsv () {
    dataProductListGet = JSON.parse(localStorage.getItem('productsList')) || [];

    if (dataProductListGet.length === 0) {
        alert('No hay productos para exportar');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/exportar-csv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productos: dataProductListGet })
        });
        
        if (response.ok) {
          // Crear enlace de descarga
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'productos-chedraui.csv';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } else {
          throw new Error('Error al generar CSV');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error al exportar a PDF');
      }
}