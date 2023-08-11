const ctx = document.getElementById('myChart');

    let  valores= [ "XXXx","XXXc","XXXv"]
    let valoresX = [14, 3, 4]


  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: valores,
      datasets: [{
        label: '# of Votes',
        data: valoresX,
        borderWidth: 1,
        backgroundColor: ['#7fffd4', '#a52a2a', 'rgb(255, 228, 196)']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  