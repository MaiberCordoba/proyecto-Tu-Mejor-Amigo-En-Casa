 document.addEventListener('DOMContentLoaded', () => {
    cargarMascotasEnMapa();
  });

  async function cargarMascotasEnMapa() {
    try {
      const response = await fetch(`${API_URL}/api/pets`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      const mascotas = data["lista de mascotas"];

      // ubicacion de vista del mapa 
      const map = L.map('map').setView([1.892374, -76.090063], 16); 

      // Carga OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      // mapeo de mascotas 
      mascotas.forEach(mascota => {
        if (mascota.latMJC && mascota.longMJC) {
          L.marker([mascota.latMJC, mascota.longMJC])
            .addTo(map)
            .bindPopup(`<strong>${mascota.name_PetsMJC}</strong>`);
        }
      });

    } catch (error) {
      console.error('Error al cargar mascotas en el mapa:', error);
      alert('No se pudieron cargar las mascotas.');
    }
  }