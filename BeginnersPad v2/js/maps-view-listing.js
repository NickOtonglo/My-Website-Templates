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
      map,
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
      map2,
      title: "Zone Name",
    });
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