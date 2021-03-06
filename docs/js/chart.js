   var ctx = document.getElementById('myChart').getContext('2d');
   var chart = new Chart(ctx, {

       type: 'line',
       data: {
           labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
           datasets: [{
               label: " Vit. B12 ",
               borderColor: 'rgb(255, 99, 132)',
               backgroundColor: 'rgb(255, 99, 132)',
               pointHoverBackgroundColor: 'rgb(255, 99, 132)',
               fill: false,
               data: [0, 10, 5, 2, 20, 30, 45]
           },
        {
            label: " Vit. D ",
            borderColor: 'rgba(36, 249, 203, 1)',
            backgroundColor: 'rgba(36, 249, 203, 1)',
            pointHoverBackgroundColor: 'rgba(36, 249, 203, 1)',
            fill: false,
            data: [0, 20, 25, 22, 34, 38, 48],
        },
        {
            label: " Vit. C ",
            borderColor: 'rgba(0, 207, 214, 1)',
            backgroundColor: 'rgba(0, 207, 214, 1)',
            pointHoverBackgroundColor: 'rgba(0, 207, 214, 1)',
            fill: false,
            data: [0, 22, 20, 28, 37, 43, 56],
        }]
       },
       options: {
           layout: {
               padding: {
                   left: 50,
                   right: 50,
                   top: 20,
                   bottom: 20
               }
            },
           title: {
               display: true,
               text: '2017 Year Chart',
               fontSize: 13,
               padding: 20
           },
           legend: {
               position: 'bottom',
               labels:{
                   boxWidth: 15
               },
           },
           animation:{
               easing: 'easeOutBack',
           },
           scales: {
               yAxes: [{
                   gridLines: {
                       display: true,
                       color: "rgba(98, 224, 228, 0.86)"
                   }
               }],
               xAxes: [{
                   gridLines: {
                       display: true,
                       color: "rgba(98, 224, 228, 0.86)"
                   }
               }],
           }
       }
   });  