<<<<<<< HEAD
var placesURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=";

var corsResolve = "https://cors-anywhere.herokuapp.com/";

var apiKey = "AIzaSyAF-eDyAVsjiIBHAVrCNFhwrHuHHGVtGqg";

function initialize() {
    $.ajax({
        url: corsResolve + placesURL + apiKey,
        method: 'GET',
    }).then(function(response) {
        console.log(response);
    })
}
initialize();
=======
var map;
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





    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
>>>>>>> d6625f73d0bc076899300551ab3c7b4db90b29fd
