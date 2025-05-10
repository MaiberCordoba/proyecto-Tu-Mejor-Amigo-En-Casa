const token = localStorage.getItem('token');
if(token) window.location.href = '/frontEnd/pages/list.html';

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit', loginMJC);

async function loginMJC(e) {
    e.preventDefault();
    
    try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        // Validación 
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

        if (!response) {
            document.getElementById("error").innerHTML ='credenciales incorrectas';
            return;
        }

        // Almacenamos el token
        localStorage.setItem('token', responseData.data);
        
     
        window.location.href = '/frontEnd/pages/list.html';

    } catch (error) {
        console.error('Error:', error);
    }
}
