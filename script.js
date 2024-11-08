// script.js

// Variables para las descripciones de productos
const descriptions = {
    chaqueta: "Con esta chaqueta llevaras un porte de lujo y relajado y a parte la puedes usar en cualquier ocasion",
    camiseta: "has que todos tus amigos hablen de ti con esta camiseta que a parte de comoda te da vibes aesthetic",
    bolso: "Bolso ideal para cualquier ocacion llevalo puesto y porsupuesto no dudamos que sea el mejor bolso de tu vida"
  };
  
  // Función para cambiar la descripción del producto
  function changeProductDescription(product) {
    const descripcionElemento = document.getElementById("descripcion");
    descripcionElemento.textContent = descriptions[product];
  }
  