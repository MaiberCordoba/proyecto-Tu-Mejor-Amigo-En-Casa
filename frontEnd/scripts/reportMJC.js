document.addEventListener('DOMContentLoaded', () => {
  cargarReporte1();
  cargarReporte2();
});

async function cargarReporte1() {
  try {
    const res1 = await fetch(`${API_URL}/api/report/1`);
    const data1 = await res1.json();
    const tbody1 = document.querySelector('#tabla-reporte-1 tbody');
  
    const labels1 = [];
    const cantidades1 = [];

    if (data1.conteo_mascotas_adoptadas.length === 0) {
      tbody1.innerHTML = '<tr><td colspan="4">No hay datos para mostrar</td></tr>';
      return;
    }
  
    data1.conteo_mascotas_adoptadas.forEach(item => {
      const fila = `<tr>
        <td>${item.categoria}</td>
        <td>${item.genero}</td>
        <td>${item.raza}</td>
        <td>${item.cantidad}</td>
      </tr>`;
      tbody1.insertAdjacentHTML('beforeend', fila);
  
      const label = `${item.categoria} - ${item.genero} - ${item.raza}`;
      labels1.push(label);
      cantidades1.push(item.cantidad);
    });
  
    new Chart(document.getElementById('grafico-reporte-1'), {
      type: 'bar',
      data: {
        labels: labels1,
        datasets: [{
          label: 'Mascotas Adoptadas',
          data: cantidades1,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  } catch (error) {
    console.error('Error cargando reporte 1:', error);
  }
}

async function cargarReporte2() {
  try {
    const res2 = await fetch(`${API_URL}/api/report/2`);
    const data2 = await res2.json();
    const tbody2 = document.querySelector('#tabla-reporte-2 tbody');
  
    const categoriasEstados = [];
    const cantidades2 = [];

    if (data2.conteo_por_estado_y_categoria.length === 0) {
      tbody2.innerHTML = '<tr><td colspan="3">No hay datos para mostrar</td></tr>';
      return;
    }
  
    data2.conteo_por_estado_y_categoria.forEach(item => {
      const fila = `<tr>
        <td>${item.categoria}</td>
        <td>${item.estado}</td>
        <td>${item.cantidad}</td>
      </tr>`;
      tbody2.insertAdjacentHTML('beforeend', fila);
  
      categoriasEstados.push(`${item.categoria} - ${item.estado}`);
      cantidades2.push(item.cantidad);
    });
  
    new Chart(document.getElementById('grafico-reporte-2'), {
      type: 'pie',
      data: {
        labels: categoriasEstados,
        datasets: [{
          label: 'Cantidad',
          data: cantidades2,
          backgroundColor: categoriasEstados.map(() => `hsl(${Math.random() * 360}, 70%, 60%)`)
        }]
      },
      options: {
        responsive: true
      }
    });
  } catch (error) {
    console.error('Error cargando reporte 2:', error);
  }
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

window.backList = () => {
    window.location.href = '/frontEnd/pages/list.html';
};
