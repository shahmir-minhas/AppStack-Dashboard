if (window.outerWidth <= 768 || window.innerWidth <= 768) {
  document.getElementById("sidebar").classList.remove("show");
  document.getElementById("sidebar").classList.add("w-100");
}
// else {
//   document.getElementById("sidebar").classList.add("show");
//   document.getElementById("sidebar").classList.remove("w-100");
// }

window.addEventListener('resize', function(event) {
  if (event.target.outerWidth <= 768 || event.target.innerWidth <= 768) {
    document.getElementById("sidebar").classList.remove("show");
    document.getElementById("sidebar").classList.add("w-100");
  } else {
    document.getElementById("sidebar").classList.add("show");
    document.getElementById("sidebar").classList.remove("w-100");
  }
});


const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
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
