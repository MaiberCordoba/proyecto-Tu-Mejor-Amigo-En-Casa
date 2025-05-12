const urlParamsMJC = new URLSearchParams(window.location.search);
const petId = urlParams.get('id');

window.backList = () => {
    window.location.href = '/frontEnd/pages/list.html'
}