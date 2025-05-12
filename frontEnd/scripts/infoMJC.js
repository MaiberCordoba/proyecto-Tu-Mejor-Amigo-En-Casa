const urlParamsMJC = new URLSearchParams(window.location.search);
const petId = urlParamsMJC.get('id');


const photoImg = document.getElementById('photo');
const nameSpan = document.getElementById('name');
const raceSpan = document.getElementById('race');
const categorySpan = document.getElementById('category');
const genderSpan = document.getElementById('gender');
const estadoSpan = document.getElementById('estado');

async function infoMJC() {
    try {
        const response = await fetch(`${API_URL}/api/pets/${petId}`);
        const mascota = await response.json();

        console.log(mascota);

        // Rellena los spans con los datos recibidos
        nameSpan.textContent = mascota.name_PetsMJC || 'No disponible';
        raceSpan.textContent = mascota.races.name_RacesMJC || 'No disponible';
        categorySpan.textContent = mascota.categories.name_CategoriesMJC || 'No disponible';
        genderSpan.textContent = mascota.Genders.name_GendersMJC || 'No disponible';
        estadoSpan.textContent = mascota.estadoMJC || 'No disponible';

        //  img pets
        if (mascota.photoMJC) {
            photoImg.src = `${API_URL}${mascota.photoMJC}`
        }

    } catch (error) {
        console.error('Error al cargar información de la mascota:', error);
    }
}


infoMJC();

// Botón para regresar a la lista
window.backList = () => {
    window.location.href = '/frontEnd/pages/list.html';
};
