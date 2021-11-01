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
let marker1, marker2;
let markers = [];
let listingPlace;

function initPlaces() {
  listingPlace = new google.maps.LatLng(-1.3003396575224304, 36.78208334575244);

  map = new google.maps.Map(document.getElementById('map'), {
    center: listingPlace,
    zoom: 15
  });
  new google.maps.Marker({
    position: listingPlace,
    map: map,
    title: "Listing",
    icon: '/images/marker-listing.png',
  });

  request = {
    location: listingPlace,
    radius: '500',
    type: ['school'],
    rankBy: google.maps.places.RankBy.PROMINENCE
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  request = {
    location: listingPlace,
    radius: '500',
    type: ['supermarket'],
    rankBy: google.maps.places.RankBy.PROMINENCE
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  request = {
    location: listingPlace,
    radius: '500',
    type: ['bus_station'],
    rankBy: google.maps.places.RankBy.PROMINENCE
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  const placesObject = {};
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      
      if(i+1 <= 3){
        if(results[i].types[0].includes('school')){
          sch = document.querySelector(`#sch${i+1}-title`);
          sch.innerHTML = results[i].name;
          document.querySelector(`#sch${i+1} .description`).innerHTML = `Status: ${results[i].business_status}`;
          document.querySelector(`#sch${i+1} .location`).innerHTML = results[i].vicinity;
          if(i === 0){
            placesObject.id_sch1 = i;
            placesObject.data_sch1 = results[i];
            let sch1 = document.querySelector('#sch1');
            sch1.onclick = () => {
              placeLocationMarker(placesObject.data_sch1);
            }
          }
          if(i === 1){
            placesObject.id_sch2 = i;
            placesObject.data_sch2 = results[i];
            let sch2 = document.querySelector('#sch2');
            sch2.onclick = () => {
              placeLocationMarker(placesObject.data_sch2);
            }
          }
          if(i === 2){
            placesObject.id_sch3 = i;
            placesObject.data_sch3 = results[i];
            let sch3 = document.querySelector('#sch3');
            sch3.onclick = () => {
              placeLocationMarker(placesObject.data_sch3);
            }
          }
        }
        if(results[i].types[0].includes('market')){
          mkt = document.querySelector(`#mkt${i+1} .title`);
          mkt.innerHTML = results[i].name;
          document.querySelector(`#mkt${i+1} .description`).innerHTML = `Status: ${results[i].business_status}`;
          document.querySelector(`#mkt${i+1} .location`).innerHTML = results[i].vicinity;
          if(i === 0){
            placesObject.id_mkt1 = i;
            placesObject.data_mkt1 = results[i];
            let mkt1 = document.querySelector('#mkt1');
            mkt1.onclick = () => {
              placeLocationMarker(placesObject.data_mkt1);
            }
          }
          if(i === 1){
            placesObject.id_mkt2 = i;
            placesObject.data_mkt2 = results[i];
            let mkt2 = document.querySelector('#mkt2');
            mkt2.onclick = () => {
              placeLocationMarker(placesObject.data_mkt2);
            }
          }
          if(i === 2){
            placesObject.id_mkt3 = i;
            placesObject.data_mkt3 = results[i];
            let mkt3 = document.querySelector('#mkt3');
            mkt3.onclick = () => {
              placeLocationMarker(placesObject.data_mkt3);
            }
          }
        }
        if(results[i].types[0].includes('bus_station')){
          bus = document.querySelector(`#bus${i+1} .title`);
          bus.innerHTML = results[i].name;
          document.querySelector(`#bus${i+1} .description`).innerHTML = `Status: ${results[i].business_status}`;
          document.querySelector(`#bus${i+1} .location`).innerHTML = results[i].vicinity;
          if(i === 0){
            placesObject.id_bus1 = i;
            placesObject.data_bus1 = results[i];
            let bus1 = document.querySelector('#bus1');
            bus1.onclick = () => {
              placeLocationMarker(placesObject.data_bus1);
            }
          }
          if(i === 1){
            placesObject.id_bus2 = i;
            placesObject.data_bus2 = results[i];
            let bus2 = document.querySelector('#bus2');
            bus2.onclick = () => {
              placeLocationMarker(placesObject.data_bus2);
            }
          }
          if(i === 2){
            placesObject.id_bus3 = i;
            placesObject.data_bus3 = results[i];
            let bus3 = document.querySelector('#bus3');
            bus3.onclick = () => {
              placeLocationMarker(placesObject.data_bus3);
            }
          }
        }
      }
    }
  }
}

function placeLocationMarker(place){
  document.querySelector('#map-view').scrollIntoView();
  hideMarkers();
  var service = new google.maps.places.PlacesService(map);
  service.getDetails({
    placeId: place.place_id
  }, (result, status) => {
    marker2 = new google.maps.Marker({
      map: map,
      place: {
        placeId: result.place_id,
        location: result.geometry.location
      }
    });
    markers.push(marker2);
  });
  // console.log(markers);
}

function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function hideMarkers() {
  setMapOnAll(null);
  markers = [];
}