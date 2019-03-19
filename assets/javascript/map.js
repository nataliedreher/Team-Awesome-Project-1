var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.7392, lng: -104.9903 },
        zoom: 8
    });
}
