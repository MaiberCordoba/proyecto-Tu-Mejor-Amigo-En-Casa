const urlParams = new URLSearchParams(window.location.search);
const petId = urlParams.get('id');
const patchForm = document.getElementById('patch-form')

const nameInput = document.getElementById('name');
const raceSelect = document.getElementById('race-select');
const categorySelect = document.getElementById('category-select');
const genderSelect = document.getElementById('gender-select');
const photoInput = document.getElementById('photo');
const photoPreview = document.getElementById('preview-photo');

async function cargarDatosMascota() {
    try {
      const response = await fetch(`${API_URL}/api/pets/${petId}`);
      const mascota = await response.json();
      console.log(mascota)
      // Llenar formulario
      nameInput.value = mascota.name_PetsMJC;
      raceSelect.value = mascota.fk_CategoriesMJC;
      categorySelect.value = mascota.fk_CategoriesMJC; 
      genderSelect.value = mascota.fk_GendersMJC;

      // Precargar imagen
      photoPreview.src = `${API_URL}${mascota.photoMJC}`
      
    } catch (error) {
      console.error(error);
      alert('Error cargando datos de la mascota');
    }
  }
  

  async function patchMJC(e) {
    e.preventDefault();
    
    // Validación
    if (!nameInput.value) return alert('Ingrese nombre');
    if (!raceSelect.value) return alert('Seleccione raza');
  
    const data = new FormData();
    data.append('name', nameInput.value);
    data.append('race', raceSelect.value);
    data.append('category', categorySelect.value);
    data.append('gender', genderSelect.value);
    
    // Solo adjunta foto si se seleccionó una nueva
    if (photoInput.files[0]) {
      data.append('photo', photoInput.files[0]);
    }
  
    try {
      const res = await fetch(`${API_URL}/api/pets/${petId}`, { 
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: data
      });
  
      const response = await res.json();
      
      if (res.ok) {
        window.location.href = '/frontEnd/pages/list.html';
      } else {
        alert(`Error: ${response.message || 'Error desconocido'}`);
      }
      
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión con el servidor');
    }
  }

  // Cargar opciones 
async function cargarOpciones() {
    try {
      // Races 
      const razas = await (await fetch(`${API_URL}/api/races/`)).json();
      raceSelect.innerHTML += razas.data.map(race => `<option value="${race.id_RacesMJC}">${race.name_RacesMJC}</option>`);
      
      //categories
      const categorias = await (await fetch(`${API_URL}/api/category/`)).json();
      categorySelect.innerHTML += categorias.data.map(category => `<option value="${category.id_CategoriesMJC}">${category.name_CategoriesMJC}</option>`);
  
      // Genders
      const generos = await (await fetch(`${API_URL}/api/genders/`)).json();
      genderSelect.innerHTML += generos.data.map(gender => `<option value="${gender.id_GendersMJC}">${gender.name_GendersMJC}</option>`);
  
      
    } catch (error) {
      console.error(error);
    }
  }
  
  // Inicialización
  document.addEventListener('DOMContentLoaded', async() => {
    if (!petId) {
      alert('Mascota no especificada');
      window.location.href = '/frontEnd/pages/list.html';
      return;
    }
    
    await cargarOpciones();
    await cargarDatosMascota();

    patchForm.addEventListener('submit', patchMJC);
  });

// Boton volver
window.backList = () => {
    window.location.href = '/frontEnd/pages/list.html'
}