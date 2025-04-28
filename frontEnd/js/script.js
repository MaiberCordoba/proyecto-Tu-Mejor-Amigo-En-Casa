// Esperamos que todo el HTML cargue antes de ejecutar JS
document.addEventListener('DOMContentLoaded', function() {
  
    // Aquí la URL de tu endpoint
    const API_URL = 'http://localhost:3000/api/pets'; // Cambia esto por tu API real
  
    // Función para traer las mascotas
    function getMascotas() {
      fetch(API_URL)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
          }
          return response.json(); // Convertimos la respuesta en JSON
        })
        .then(data => {
          console.log('Mascotas recibidas:', data);
          // Aquí después pintaremos las mascotas en pantalla
        })
        .catch(error => {
          console.error('Error al traer las mascotas:', error);
        });
    }
  
    // Llamamos la función
    getMascotas();
  
  });
  