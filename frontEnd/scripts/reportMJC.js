async function cargarReportes() {
    // Reporte 1
    const res1 = await fetch(`${API_URL}/api/report/1`);
    const data1 = await res1.json();
    console.log(data1.conteo_mascotas_adoptadas)
    const tbody1 = document.querySelector('#tabla-reporte-1 tbody');
data1.conteo_mascotas_adoptadas.forEach(item => {
  const fila = `<tr>
    <td>${item.categoria}</td>
    <td>${item.genero}</td>
    <td>${item.raza}</td>
    <td>${item.cantidad}</td>
  </tr>`;
  tbody1.insertAdjacentHTML('beforeend', fila);
});
    // Reporte 2
    const res2 = await fetch(`${API_URL}/api/report/2`);
    const data2 = await res2.json();
  
    const tbody2 = document.querySelector('#tabla-reporte-2 tbody');
    data2.conteo_por_estado_y_categoria.forEach(item => {
      const fila = `<tr>
                      <td>${item.categoria}</td>
                      <td>${item.estado}</td>
                      <td>${item.cantidad}</td>
                    </tr>`;
      tbody2.insertAdjacentHTML('beforeend', fila);
    });
  }
  
  function descargarPDF() {
    const btn = document.getElementById("btn-pdf");
        btn.style.display = 'none';

    const elemento = document.getElementById("reporte-container");
    html2pdf()
      .from(elemento)
      .set({
        margin: 0.5,
        filename: 'reporte_mascotas.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      })
      .save()
      .then(() => {
        btn.style.display = 'inline-block'; 
      });
  }
  
  document.addEventListener('DOMContentLoaded', cargarReportes);

window.backList = () => {
    window.location.href = '/frontEnd/pages/list.html';
};
