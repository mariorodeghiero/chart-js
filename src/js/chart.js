   var ctx = document.getElementById('myChart').getContext('2d');
   var chart = new Chart(ctx, {

       type: 'line',
       data: {
           labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
           datasets: [{
               label: "B12",
               borderColor: 'rgb(255, 99, 132)',
               fill: false,
               data: [0, 10, 5, 2, 20, 30, 45],
           }]
       },
   });  