var chartDashListingsBeginner = document.getElementById('chartDashListingsBeginner');
var chartDashTicketsBeginner = document.getElementById('chartDashTicketsBeginner');
var chartDashReviewsBeginner = document.getElementById('chartDashReviewsBeginner');
var chartDashBeginnerFavs = document.getElementById('chartDashBeginnerFavs');

var chartDashListerListings = document.getElementById('chartDashListerListings');
var chartDashListerUnits = document.getElementById('chartDashListerUnits');
var chartDashListerBegAppl = document.getElementById('chartDashListerBegAppl');
var chartDashListerTours = document.getElementById('chartDashListerTours');
var chartDashListerBanned = document.getElementById('chartDashListerBanned');
var chartDashListerRating = document.getElementById('chartDashListerRating');
var chartDashListerTickets = document.getElementById('chartDashListerTickets');
var chartDashListerFavs = document.getElementById('chartDashListerFavs');

var chartListingBeginner = new Chart(chartDashListingsBeginner, {
    type: 'bar',
    data: {
        labels: ['occupied', 'submitted', 'pending', 'rejected', 'approved'],
        datasets: [{
            label: 'Applications',
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

var chartTicketsBeginner = new Chart(chartDashTicketsBeginner, {
    type: 'bar',
    data: {
        labels: ['submitted', 'pending', 'resolved', 'open', 'closed'],
        datasets: [{
            label: 'Tickets',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#703680',
                'rgb(207, 95, 50)',
                'rgb(13, 180, 138)',
                '#a058f1',
                'rgb(238, 14, 14)'
            ],
            borderColor: [
                '#703680',
                'rgb(207, 95, 50)',
                'rgb(13, 180, 138)',
                '#a058f1',
                'rgb(238, 14, 14)'
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

var chartReviewsBeginner = new Chart(chartDashReviewsBeginner, {
    type: 'bar',
    data: {
        labels: ['total', 'flagged', 'removed'],
        datasets: [{
            label: 'Reviews',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#703680',
                'rgb(207, 95, 50)',
                'rgb(238, 14, 14)'
            ],
            borderColor: [
                '#703680',
                'rgb(207, 95, 50)',
                'rgb(238, 14, 14)'
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

var chartBeginnerFavs = new Chart(chartDashBeginnerFavs, {
    type: 'bar',
    data: {
        labels: ['listings', 'units', 'topics'],
        datasets: [{
            label: 'Favourites',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#703680',
                '#362c41',
                '#a058f1'
            ],
            borderColor: [
                '#703680',
                '#362c41',
                '#a058f1'
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

var chartListerListings = new Chart(chartDashListerListings, {
    type: 'bar',
    data: {
        labels: ['listings', 'units', 'topics'],
        datasets: [{
            label: 'Favourites',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#703680',
                '#362c41',
                '#a058f1'
            ],
            borderColor: [
                '#703680',
                '#362c41',
                '#a058f1'
            ],
            borderWidth: 1,
            id: 'chartListerListings'
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

var chartListerUnits = new Chart(chartDashListerUnits, {
    type: 'bar',
    data: {
        labels: ['listings', 'units', 'topics'],
        datasets: [{
            label: 'Favourites',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#703680',
                '#362c41',
                '#a058f1'
            ],
            borderColor: [
                '#703680',
                '#362c41',
                '#a058f1'
            ],
            borderWidth: 1,
            chartListerUnits: 'chartListerUnits'
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

var chartListerBegAppl = new Chart(chartDashListerBegAppl, {
    type: 'bar',
    data: {
        labels: ['listings', 'units', 'topics'],
        datasets: [{
            label: 'Favourites',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#703680',
                '#362c41',
                '#a058f1'
            ],
            borderColor: [
                '#703680',
                '#362c41',
                '#a058f1'
            ],
            borderWidth: 1,
            id: 'chartListerBegAppl'
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

var chartListerTours = new Chart(chartDashListerTours, {
    type: 'bar',
    data: {
        labels: ['listings', 'units', 'topics'],
        datasets: [{
            label: 'Favourites',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#703680',
                '#362c41',
                '#a058f1'
            ],
            borderColor: [
                '#703680',
                '#362c41',
                '#a058f1'
            ],
            borderWidth: 1,
            id: 'chartListerTours'
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

var chartListerBanned = new Chart(chartDashListerBanned, {
    type: 'bar',
    data: {
        labels: ['listings', 'units', 'topics'],
        datasets: [{
            label: 'Favourites',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#703680',
                '#362c41',
                '#a058f1'
            ],
            borderColor: [
                '#703680',
                '#362c41',
                '#a058f1'
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

var chartListerRating = new Chart(chartDashListerRating, {
    type: 'bar',
    data: {
        labels: ['listings', 'units', 'topics'],
        datasets: [{
            label: 'Favourites',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#703680',
                '#362c41',
                '#a058f1'
            ],
            borderColor: [
                '#703680',
                '#362c41',
                '#a058f1'
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

var chartListerTickets = new Chart(chartDashListerTickets, {
    type: 'bar',
    data: {
        labels: ['listings', 'units', 'topics'],
        datasets: [{
            label: 'Favourites',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#703680',
                '#362c41',
                '#a058f1'
            ],
            borderColor: [
                '#703680',
                '#362c41',
                '#a058f1'
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

var chartListerFavs = new Chart(chartDashListerFavs, {
    type: 'bar',
    data: {
        labels: ['listings', 'units', 'topics'],
        datasets: [{
            label: 'Favourites',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#703680',
                '#362c41',
                '#a058f1'
            ],
            borderColor: [
                '#703680',
                '#362c41',
                '#a058f1'
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