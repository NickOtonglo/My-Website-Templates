var chartDashListingsBeginner = document.getElementById('chartDashListingsBeginner');
var chartDashListingsBeginner = document.getElementById('chartDashListingsBeginner');
var chartDashListingsBeginner = document.getElementById('chartDashListingsBeginner');
var chartDashListingsBeginner = document.getElementById('chartDashListingsBeginner');

var myChart = new Chart(chartDashListingsBeginner, {
    type: 'bar',
    data: {
        labels: ['occupied', 'submitted', 'pending', 'rejected', 'approved'],
        datasets: [{
            label: 'Listings',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#703680',
                '#a058f1',
                'rgb(207, 95, 50)',
                'rgb(238, 14, 14)',
                'rgb(13, 180, 138)'
            ],
            borderColor: [
                '#703680',
                '#a058f1',
                'rgb(207, 95, 50)',
                'rgb(238, 14, 14)',
                'rgb(13, 180, 138)'
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

// var myChart2 = new Chart(ctx2, {
//     type: 'pie',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [7, 11, 13, 8, 12, 9],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.9)',
//                 'rgba(54, 162, 235, 0.9)',
//                 'rgba(255, 206, 86, 0.9)',
//                 'rgba(75, 192, 192, 0.9)',
//                 'rgba(153, 102, 255, 0.9)',
//                 'rgba(255, 159, 64, 0.9)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         },
//         plugins: {
//             legend: {
//                 labels: {
//                     // This more specific font property overrides the global property
//                     font: {
//                         size: 14
//                     }
//                 },
//                 layout: {
//                     padding: 550
//                 }
//             }
//         },
//         animation: false,
//         responsive: false,
//         onHover: function () {
//             console.log('Hover')
//         }
//     }
// });