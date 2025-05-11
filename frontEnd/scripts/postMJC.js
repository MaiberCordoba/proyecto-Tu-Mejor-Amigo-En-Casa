const postForm = document.getElementById('post-form');
    postForm.addEventListener('submit', postMJC)

const nameInput = document.getElementById('name');
const raceSelect = document.getElementById('race-select');
const categorySelect = document.getElementById('category-select');
const genderSelect = document.getElementById('gender-select');
const photoInput = document.getElementById('photo');

// Enviar formulario
async function postMJC(e) {
    e.preventDefault();
    
    // Validación
    if (!nameInput.value.trim()) return alert('Ingrese nombre');
    if (!raceSelect.value || raceSelect.value === 'default') return alert('Seleccione raza');
    if (!categorySelect.value || categorySelect.value === 'default') return alert('Seleccione categoría');
    if (!genderSelect.value || genderSelect.value === 'default') return alert('Seleccione género');
    if (!photoInput.files[0]) return alert('Seleccione una foto');
  
    const data = new FormData();
    // Nombres 
    data.append('name', nameInput.value);
    data.append('race', raceSelect.value);
    data.append('category', categorySelect.value);
    data.append('gender', genderSelect.value);
    data.append('photo', photoInput.files[0]);
  
    try {
      const res = await fetch(`${API_URL}/api/pets/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: data
      });
      console.log('asdas',res)
      const response = await res.json(); // Siempre parsear la respuesta
      

      if (res.ok) {
        window.location.href = '/frontEnd/pages/list.html';
      } else {
        alert(`Error: ${response.message || 'Error desconocido'}`);
      }
      
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión con el servidor');
    }
  };

// Cargar opciones básicas
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