const postForm = document.getElementById('post-form');
    postForm.addEventListener('submit', postMJC)

const nameInput = document.getElementById('name');
const raceSelect = document.getElementById('race-select');
const categorySelect = document.getElementById('category-select');
const genderSelect = document.getElementById('gender-select');
const photoInput = document.getElementById('photo');
const latInput = document.getElementById('lat');
const logInput = document.getElementById('log');

// Enviar formulario
async function postMJC(e) {
    e.preventDefault();
    
    // Validación
    if (!nameInput.value) return alert('Ingrese nombre');
    if (raceSelect.value.includes('Seleccione')) return alert('Seleccione raza');
    if (categorySelect.value.includes('Seleccione')) return alert('Seleccione categoría');
    if (genderSelect.value.includes('Seleccione')) return alert('Seleccione genero');
    if (!photoInput.files[0]) return alert('Seleccione una foto');
    if (!latInput.value) return alert('rellene el campo de latitud');
    if (!logInput.value) return alert('rellene el campo de longitud');
    
    const data = new FormData();
    // Nombres 
    data.append('name', nameInput.value);
    data.append('race', raceSelect.value);
    data.append('category', categorySelect.value);
    data.append('gender', genderSelect.value);
    data.append('photo', photoInput.files[0]);
    data.append('lat', latInput.value);
    data.append('long', logInput.value);
  
    try {
      const res = await fetch(`${API_URL}/api/pets/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: data
      });
      console.log('asdas',res)
      const response = await res.json();
      
      if (res.ok) {
        alert('mascota creada con exito');
        window.location.replace('/frontEnd/pages/list.html');
      }
      
      if (!res.ok) {
        alert(`Error: ${response.message || 'Error desconocido'}`)
      }
      
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión con el servidor');
    }
  };

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

// Inicializar
cargarOpciones();

// Boton volver
window.backList = () => {
    window.location.href = '/frontEnd'
}