const ctx = document.getElementById('myChart');

    let  valores= [ "XXXx","XXXc","XXXv"]
    let valoresX = [10,20 , 15]


  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: valores,
      datasets: [{
        label: '# of Votes',
        data: valoresX,
        borderWidth: 1,
        backgroundColor: ['#08251c', '#a52a2a', 'rgb(255, 228, 196)']
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
  