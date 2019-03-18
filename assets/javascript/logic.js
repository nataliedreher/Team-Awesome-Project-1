function initMap() {
    // The location of Uluru
    var uluru = { lat: -25.344, lng: 131.036 };
    // possible alternative to Uluru
    var latlng = new google.maps.LatLng(-25.344, -131.036);
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('gmap_canvas'), { zoom: 4, center: latlng });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: latlng, map: map });
}


$(".logo-col").on("click", function() {
// alert("test")
var btnPushed = $(this).attr("id")
var request ={
    locationBias: this.myLocation,
    query: "btnPushed",
    fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry']
  };
console.log(btnPushed)
  var search = new google.maps.places.PlacesService.findPlaceFromQuery(request, google.maps.places.PlacesServiceStatus)
  console.log(search)

// $.ajax({
//     url: "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?json&key=AIzaSyAF-eDyAVsjiIBHAVrCNFhwrHuHHGVtGqg&inputtype=textquery&input=" + btnPushed,
//     method: "GET"
// }).then(function (response) {

//     console.log(response)

// })

})











