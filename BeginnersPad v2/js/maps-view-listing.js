let map;

function initMap() {
  const myLatLng = { lat: -1.3003396575224304, lng: 36.78208334575244 };
  
  if(document.querySelector("#map")){
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Listing Name",
    });
  }

  if(document.querySelector("#map2")){
    const map2 = new google.maps.Map(document.querySelector("#map2"), {
      zoom: 16,
      center: myLatLng,
      mapTypeControl: false,
    });
    new google.maps.Marker({
      position: myLatLng,
      map: map2,
      title: "Zone Name",
    });
  }
}

var service;
var infowindow;
let request;
let sch,mkt,bus;

function initPlaces() {
  var kilimani = new google.maps.LatLng(-1.3003396575224304, 36.78208334575244);

  map = new google.maps.Map(document.getElementById('map'), {
      center: kilimani,
      zoom: 15
    });

  request = {
    location: kilimani,
    radius: '500',
    type: ['school'],
    rankBy: google.maps.places.RankBy.PROMINENCE
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  request = {
    location: kilimani,
    radius: '500',
    type: ['supermarket'],
    rankBy: google.maps.places.RankBy.PROMINENCE
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  request = {
    location: kilimani,
    radius: '500',
    type: ['bus_station'],
    rankBy: google.maps.places.RankBy.PROMINENCE
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      // new google.maps.Marker({
      //   map: map,
      //   place: {
      //       placeId: results[i].place_id,
      //       location: results[i].geometry.location
      //   }
      // });
      
      if(i+1 <= 3){
        if(results[i].types[0].includes('school')){
          sch = document.querySelector(`#sch${i+1}-title`);
          sch.innerHTML = results[i].name;
          document.querySelector(`#sch${i+1} .description`).innerHTML = `Status: ${results[i].business_status}`;
          document.querySelector(`#sch${i+1} .location`).innerHTML = results[i].vicinity;
        }
        if(results[i].types[0].includes('market')){
          mkt = document.querySelector(`#mkt${i+1} .title`);
          mkt.innerHTML = results[i].name;
          document.querySelector(`#mkt${i+1} .description`).innerHTML = `Status: ${results[i].business_status}`;
          document.querySelector(`#mkt${i+1} .location`).innerHTML = results[i].vicinity;
        }
        if(results[i].types[0].includes('bus_station')){
          bus = document.querySelector(`#bus${i+1} .title`);
          bus.innerHTML = results[i].name;
          document.querySelector(`#bus${i+1} .description`).innerHTML = `Status: ${results[i].business_status}`;
          document.querySelector(`#bus${i+1} .location`).innerHTML = results[i].vicinity;
        }
      }

      console.log(results[i])
    }
  }
}

// var map;
// var service;
// var infowindow;
// let obj;

// function initMap() {
//     var listingLocation = new google.maps.LatLng(-1.3003396575224304,36.78208334575244);

//     map = new google.maps.Map(document.getElementById('map'), {
//         center: listingLocation,
//         zoom: 16
//     });

//     var request = {
//         location: listingLocation,
//         radius: '500',
//         query: 'restaurant'
//     };

//     service = new google.maps.places.PlacesService(map);
//     service.textSearch(request, callback);
// }

// function callback(results, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//         for (var i = 0; i < 3; i++) {
//             var place = results[i];
//             sch = document.getElementById('sch'+(i+1)+'-title');
//             sch.innerHtml = place.name;
//             // createMarker(results[i]);
//             console.log(place);
//         }
//     }
// }