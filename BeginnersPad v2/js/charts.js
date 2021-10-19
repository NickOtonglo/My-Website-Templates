var chartDashListingsBeginner,chartDashTicketsBeginner,chartDashReviewsBeginner,
    chartDashBeginnerFavs;

if (document.querySelector('#chartDashListingsBeginner')) {
    chartDashListingsBeginner = document.querySelector('#chartDashListingsBeginner');
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
}

if (document.querySelector('#chartDashTicketsBeginner')) {
    var chartDashTicketsBeginner = document.querySelector('#chartDashTicketsBeginner');
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
}

if (document.querySelector('#chartDashReviewsBeginner')) {
    var chartDashReviewsBeginner = document.querySelector('#chartDashReviewsBeginner');
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
}

if (document.querySelector('#chartDashBeginnerFavs')) {
    var chartDashBeginnerFavs = document.querySelector('#chartDashBeginnerFavs');
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
}

var chartDashListerListings,chartDashListerUnits,chartDashListerBegAppl,chartDashListerTours,
    chartDashListerBanned,chartDashListerRating,chartDashListerTickets,chartDashListerFavs;

if (document.querySelector('#chartDashListerListings')) {
    chartDashListerListings = document.querySelector('#chartDashListerListings');
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
}

if (document.querySelector('#chartDashListerUnits')) {
    chartDashListerUnits = document.querySelector('#chartDashListerUnits');
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
}

if (document.querySelector('#chartDashListerBegAppl')) {
    chartDashListerBegAppl = document.querySelector('#chartDashListerBegAppl');
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
}

if (document.querySelector('#chartDashListerTours')) {
    chartDashListerTours = document.querySelector('#chartDashListerTours');
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
}

if (document.querySelector('#chartDashListerBanned')) {
    chartDashListerBanned = document.querySelector('#chartDashListerBanned');
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
}

if (document.querySelector('#chartDashListerRating')) {
    chartDashListerRating = document.querySelector('#chartDashListerRating');
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
}

if (document.querySelector('#chartDashListerTickets')) {
    chartDashListerTickets = document.querySelector('#chartDashListerTickets');
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
}

if (document.querySelector('#chartDashListerFavs')) {
    chartDashListerFavs = document.querySelector('#chartDashListerFavs');
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
}

var chartDashAdminUsers,chartDashAdminListings,chartDashAdminUnits,chartDashAdminBegAppl,
    chartDashAdminReviews,chartDashAdminTours,chartDashAdminRating,chartDashAdminTickets,
    chartDashAdminZones,chartDashAdminTopics,chartDashAdminTags,chartDashAdminFavs;

if (document.querySelector('#chartDashAdminUsers')) {
    chartDashAdminUsers = document.querySelector('#chartDashAdminUsers');
    var chartAdminUsers = new Chart(chartDashAdminUsers, {
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
}

if (document.querySelector('#chartDashAdminListings')) {
    chartDashAdminListings = document.querySelector('#chartDashAdminListings');
    var chartAdminListings = new Chart(chartDashAdminListings, {
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
}

if (document.querySelector('#chartDashAdminUnits')) {
    chartDashAdminUnits = document.querySelector('#chartDashAdminUnits');
    var chartAdminUnits = new Chart(chartDashAdminUnits, {
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
}

if (document.querySelector('#chartDashAdminBegAppl')) {
    chartDashAdminBegAppl = document.querySelector('#chartDashAdminBegAppl');
    var chartAdminBegAppl = new Chart(chartDashAdminBegAppl, {
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
}

if (document.querySelector('#chartDashAdminReviews')) {
    chartDashAdminReviews = document.querySelector('#chartDashAdminReviews');
    var chartAdminReviews = new Chart(chartDashAdminReviews, {
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
}

if (document.querySelector('#chartDashAdminTours')) {
    chartDashAdminTours = document.querySelector('#chartDashAdminTours');
    var chartAdminTours = new Chart(chartDashAdminTours, {
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
}

if (document.querySelector('#chartDashAdminRating')) {
    chartDashAdminRating = document.querySelector('#chartDashAdminRating');
    var chartAdminRating = new Chart(chartDashAdminRating, {
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
}

if (document.querySelector('#chartDashAdminTickets')) {
    chartDashAdminTickets = document.querySelector('#chartDashAdminTickets');
    var chartAdminTickets = new Chart(chartDashAdminTickets, {
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
}

if (document.querySelector('#chartDashAdminZones')) {
    chartDashAdminZones = document.querySelector('#chartDashAdminZones');
    var chartAdminZones = new Chart(chartDashAdminZones, {
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
}

if (document.querySelector('#chartDashAdminTopics')) {
    chartDashAdminTopics = document.querySelector('#chartDashAdminTopics');
    var chartAdminTopics = new Chart(chartDashAdminTopics, {
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
}

if (document.querySelector('#chartDashAdminTags')) {
    chartDashAdminTags = document.querySelector('#chartDashAdminTags');
    var chartAdminTags = new Chart(chartDashAdminTags, {
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
}

if (document.querySelector('#chartDashAdminFavs')) {
    chartDashAdminFavs = document.querySelector('#chartDashAdminFavs');
    var chartAdminFavs = new Chart(chartDashAdminFavs, {
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
}