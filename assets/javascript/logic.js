var map;
function initMap(latCity, lngCity) {
    var cityLatLng = { lat: latCity, lng: lngCity },
    map = new google.maps.Map(document.getElementById('map'), {
        center: cityLatLng,
        zoom: 12
    });

    var labels = "ABCDE";

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

var locations = [];

var latCity;
var lngCity;

var cityInput;
var fullName;

var map;
var lctn = "denver";
var term = "italian";
var category = "food"
var API_key = "gRTZgWGEiqxJda4wW8d6vbqO0QQcPqP3wPx0JsOTiX58Vw2cTzMS9WCe3ihn_A9CO9nAY3q2G0aaYoFtaDzxG710uz1CwzcE8UKfhKz8B23h1ai94ArS6oRbTfeLXHYx";
var myurl = 'https://cors-anywhere.herokuapp.com/' + "https://api.yelp.com/v3/businesses/search?" + "&location=" + lctn + "&openNow=true&categories=" + category + "&term=" + term;

$.ajax({
    url: myurl,
    headers: {
        'Authorization': 'Bearer ' + API_key,
    },
    method: 'GET',
    success: function (data) {
        console.log('success: ', data);
    }
});

var cityInput;

event.preventDefault();
cityInput = $('#exampleFormControlInput1').val().trim();

var placesURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + cityInput + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&radius=5000&key=";


var corsResolve = "https://cors-anywhere.herokuapp.com/";

    
var apiKey = "AIzaSyAF-eDyAVsjiIBHAVrCNFhwrHuHHGVtGqg";
var yelpName = [];
var yelpCoordinates = [];
var map;
var category = "food"
var API_key = "gRTZgWGEiqxJda4wW8d6vbqO0QQcPqP3wPx0JsOTiX58Vw2cTzMS9WCe3ihn_A9CO9nAY3q2G0aaYoFtaDzxG710uz1CwzcE8UKfhKz8B23h1ai94ArS6oRbTfeLXHYx";
var myurl = 'https://cors-anywhere.herokuapp.com/' + "https://api.yelp.com/v3/businesses/search?" + "&location=" + lctn + "&openNow=true&sortBy=rating&limit=5&categories=" + category + "&term=" + term;


//YELP API

$.ajax({
    url: myurl,
    headers: {
        'Authorization': 'Bearer ' + API_key,
    },
    method: 'GET',
    success: function (data) {

for (var i=0; i < data.businesses.length; i++) {
    // console.log("Name: " + data.businesses[i].name);
    yelpName.push(data.businesses[i].name);
    console.log(yelpName);
    var obj = {latitude: data.businesses[i].coordinates.latitude, longitude: data.businesses[i].coordinates.longitude};
    yelpCoordinates.push(obj);
    console.log(yelpCoordinates);
    // console.log("Latitude: " + );
    // console.log("Longitude: " + );

}
        console.log('success: ', data);
    }
});


//GOOGLE PLACES API
cityInput = $('#exampleFormControlInput1').val().trim();

var placesURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + cityInput + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&radius=5000&key=";

$('#find-city').on("click", function (event) {
    event.preventDefault();

    var temp = $('#exampleFormControlInput1').val().trim();
    cityInput = temp.toString();
    var placesURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + cityInput + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&radius=5000&key=";


    function initialize() {
        $.ajax({
            url: corsResolve + placesURL + apiKey,
            method: 'GET',
        }).then(function (response) {
            console.log(response);
            console.log(response.candidates[0].formatted_address);
            latCity = (response.candidates[0].geometry.location.lat);
            lngCity = (response.candidates[0].geometry.location.lng);
            initMap(latCity, lngCity);
        })
    }
    initialize();
})

var category = "food";
var API_key = "gRTZgWGEiqxJda4wW8d6vbqO0QQcPqP3wPx0JsOTiX58Vw2cTzMS9WCe3ihn_A9CO9nAY3q2G0aaYoFtaDzxG710uz1CwzcE8UKfhKz8B23h1ai94ArS6oRbTfeLXHYx";
var yelp = [];

$(".logo-col").on('click', function () {

    category = $(this).attr("id");

    //Grabbing info from Yelp
    var myurl = corsResolve + "https://api.yelp.com/v3/businesses/search?" + "&location=" + cityInput + "&radius=5000&openNow=true&sortBy=rating&limit=5&categories=" + category;
    
    //YELP API
    $.ajax({
        url: myurl,
        headers: {
            'Authorization': 'Bearer ' + API_key,
        },
        method: 'GET',
        success: function (data) {
            for (var i = 0; i < data.businesses.length; i++) {
                var obj = { name: data.businesses[i].name, latitude: data.businesses[i].coordinates.latitude, longitude: data.businesses[i].coordinates.longitude };
                yelp.push(obj);
            }

            console.log(yelp);
            console.log('success: ', data);
            console.log(yelp[0].name);
            var latLogo = yelp[0].latitude;
            console.log(latLogo);
            var lngLogo = yelp[0].longitude;
            console.log(lngLogo);

            for (var j = 0; j < yelp.length; j++) {
                latLogo = yelp[j].latitude;
                lngLogo = yelp[j].longitude;
                var pushLatLng = { lat: latLogo, lng: lngLogo };
                console.log(pushLatLng);
                locations.push(pushLatLng);
            }
            console.log(locations);
            initMap(latCity, lngCity);
        }
    });
})
