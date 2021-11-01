let map;
let markerZone,latZone,lngZone;

function initZone() {
  const myLatLng = { lat: -1.3003396575224304, lng: 36.78208334575244 };

  if(document.querySelector("#map")){
    const map = new google.maps.Map(document.querySelector("#map"), {
      zoom: 14,
      center: myLatLng,
      mapTypeControl: false,
    });
    new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: myLatLng,
        radius: 1000,
    });
  }

  if(document.querySelector("#map2")){
    const map2 = new google.maps.Map(document.querySelector("#map2"), {
      zoom: 15,
      center: myLatLng,
      mapTypeControl: false,
    });
    // new google.maps.Marker({
    //   position: myLatLng,
    //   map: map2,
    //   title: "Sub-zone",
    // });
    google.maps.event.addListener(map2,'click',(event) => {
        placeMarker(event.latLng,map2);
        document.querySelector('#latitude').value = latZone;
        document.querySelector('#longitude').value = lngZone;
    });
  }
}

function placeMarker(location, map) {
    if (markerZone == null) {
        markerZone = new google.maps.Marker({
            position: location,
            map: map,
            title: "Centre of sub-zone",
        });
    } else {
        markerZone.setPosition(location);
    }
    latZone = markerZone.getPosition().lat();
    lngZone = markerZone.getPosition().lng();
}