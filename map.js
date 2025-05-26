function initMap() {
    const location = { lat: 48.8606, lng: 2.3376 }; // Лувр, Париж

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        mapId: "26aecb2c5aef7fb6b7f8d6cf"
    });

    new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: location,
        title: "Лувр"
    });
}