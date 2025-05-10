const token = localStorage.getItem('token');
if(!token) window.location.href = '/frontEnd';

function logout(){
    localStorage.removeItem("token");
    window.location.href = "/frontEnd";
}   