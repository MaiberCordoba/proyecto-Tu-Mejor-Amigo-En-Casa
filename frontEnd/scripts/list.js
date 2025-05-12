document.getElementById("pet-list").innerHTML = '...cargando';


async function cargarMascotas() {
  try {
    const response = await fetch(`${API_URL}/api/pets`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    const mascotas = data["lista de mascotas"] ;
 
    mostrarMascotas(mascotas);
    console.log(mascotas)

    
  } catch(error) {
    console.error(error);
    document.getElementById("pet-list").innerHTML =  `
    <div class="pet-card-inpar">
        <h3 class="pet-name">No hay mascotas</h3>
    </div>
  `;
  }
}


function mostrarMascotas(mascotas) {
  
  const petList = document.getElementById("pet-list");

  petList.innerHTML = mascotas.map((mascota, index) => {
    const cardType = index % 2 === 0 ? "pet-card-par" : "pet-card-inpar";
    const fotoUrl = `${API_URL}${mascota.photoMJC}`


    return `
      <div class="${cardType}">
        <div class="imgPets">
          <img src="${fotoUrl}" alt="${mascota.name_PetsMJC}">
        </div>
        <div class="pet-info">
          <h3 class="pet-name">${mascota.name_PetsMJC}</h3>
          <p class="pet-raze">${mascota.races.name_RacesMJC}</p>
        </div>
        <div class="buttons-options">
          <button onclick = "infoMascota('${mascota.id_PetMJC}')">
          <img src="../assets/icons/btn-show.svg" alt="Ver">
          </button>
          <button onclick="editarMascota('${mascota.id_PetMJC}')">
            <img src="../assets/icons/btn-edit.svg" alt="Editar">
          </button>
          <button onclick="eliminarMascota('${mascota.id_PetMJC}')">
            <img src="../assets/icons/btn-delete.svg" alt="Eliminar">
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
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
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

//crear pets
function addPets(){
  window.location.href = ('post.html')
}


//editar Pets
window.editarMascota = (id) => {
  window.location.href = `/frontEnd/pages/patch.html?id=${id}`;
}

//info Pets
window.infoMascota = (id) => {
  window.location.href = `/frontEnd/pages/infoMJC.html?id=${id}`;
}

//crear pets
function onReport(){
  window.location.href = ('reportMJC.html')
}

document.addEventListener("DOMContentLoaded", cargarMascotas);