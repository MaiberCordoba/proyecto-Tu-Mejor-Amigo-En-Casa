document.getElementById("pet-list").innerHTML = '...cargando';

// Función principal
async function cargarMascotas() {
  try {
    const response = await fetch(`${API_URL}/api/pets`);
    
    const data = await response.json();
    const mascotas = data["lista de mascotas"] ;
    
    // Mostrar mascotas
    mostrarMascotas(mascotas);
    
  } catch(error) {
    console.error(error);
    document.getElementById("pet-list").innerHTML = '<p class="error">Error al cargar las mascotas</p>';
  }
}

// Mostrar las mascotas (manteniendo tus cards originales)
function mostrarMascotas(mascotas) {
  const petList = document.getElementById("pet-list");
  
  if(mascotas.length === 0) {
    petList.innerHTML = `
      <div class="pet-card-inpar">
          <h3 class="pet-name">No hay mascotas</h3>
      </div>
    `;
    return;
  }

  petList.innerHTML = mascotas.map((mascota, index) => {
    const cardType = index % 2 === 0 ? "pet-card-par" : "pet-card-inpar";
    const fotoUrl = `${API_URL}${mascota.photoMJC}`


    return `
      <div class="${cardType}">
        <div class="imgPets">
          <img src="${fotoUrl}" alt="${mascota.name_PetsMJC}" 
               onerror="this.src='./assets/pets/photo-sm-1.svg'">
        </div>
        <div class="pet-info">
          <h3 class="pet-name">${mascota.name_PetsMJC}</h3>
          <p class="pet-raze">${mascota.fk_RacesMJC || "Sin raza"}</p>
        </div>
        <div class="buttons-options">
          <button><img src="./assets/icons/btn-show.svg" alt="Ver"></button>
          <button><img src="./assets/icons/btn-edit.svg" alt="Editar"></button>
          <button onclick="eliminarMascota('${mascota.id_PetMJC}')">
            <img src="./assets/icons/btn-delete.svg" alt="Eliminar">
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// eliminar
window.eliminarMascota = async function(id) {
  
  const confirmar = confirm("¿Estás seguro que quieres eliminar esta mascota?");
  
  if (!confirmar) return; 

  try {
    const response = await fetch(`${API_URL}/api/pets/${id}`, {
      method: "DELETE"
    });

    if(response) {
      cargarMascotas(); 
    } else {
      alert("No se pudo eliminar la mascota");
    }
  } catch(error) {
    console.error(error);
    alert("Error de conexión al servidor");
  }
};


document.addEventListener("DOMContentLoaded", cargarMascotas);