const token = localStorage.getItem('token');
if(token) window.location.href = '/frontEnd/pages/list.html';

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit', loginMJC);

async function loginMJC(e) {
    e.preventDefault();
    
    try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
       
        

        // Validación básica de campos vacíos
        if (!email || !password) {
            document.getElementById("error").innerHTML ='Por favor complete todos los campos';
            return;
        }

        const data = { email, password };
        
        const response = await fetch(`${API_URL}/api/login`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        console.log("response ", responseData.data)

        if (!response.ok) { // Verificamos el status code HTTP
            // Mostramos el mensaje de error del servidor o uno genérico
            document.getElementById("error").innerHTML ='credenciales incorrectas';
            return;
        }

        // Verificamos que realmente venga el token
        if (!responseData.data) {
            document.getElementById("error").innerHTML ='error no token';
            return;
        }

        // Almacenamos el token
        localStorage.setItem('token', responseData.data);
        
        // Redirigimos al usuario
        window.location.href = '/frontEnd/pages/list.html';

    } catch (error) {
        console.error('Error:', error);
    }
}
