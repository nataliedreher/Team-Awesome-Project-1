// initializing the map so it'll actually work
var map;

function initMap(latCity, lngCity) {
    var cityLatLng = {
            lat: latCity,
            lng: lngCity
        },
        map = new google.maps.Map(document.getElementById('map'), {
            center: cityLatLng,
            zoom: 12
        });

    var labels = "ABCDE";

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            animation: google.maps.Animation.DROP
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}

var locations = [];
var latCity;
var lngCity;
var fullName;
var category = "food"
var API_key = "gRTZgWGEiqxJda4wW8d6vbqO0QQcPqP3wPx0JsOTiX58Vw2cTzMS9WCe3ihn_A9CO9nAY3q2G0aaYoFtaDzxG710uz1CwzcE8UKfhKz8B23h1ai94ArS6oRbTfeLXHYx";
var cityInput;
var placesURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + cityInput + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&radius=5000&key=";
var corsResolve = "https://cors-anywhere.herokuapp.com/";
var apiKey = "AIzaSyAF-eDyAVsjiIBHAVrCNFhwrHuHHGVtGqg";
var yelp = [];
var previousSearches = [];
var recent = JSON.parse(localStorage.getItem("recentSearch"));

// this checks the local storage, if it exists then it adds it to the 'previousSearches'
if (!Array.isArray(recent)) {
    previousSearches = [];
} else {
    previousSearches = JSON.parse(localStorage.getItem("recentSearch"));
}

cityInput = $('#exampleFormControlInput1').val().trim();

// The event for searching for a city
$('#find-city').on("click", function () {
    event.preventDefault();

    var temp = $('#exampleFormControlInput1').val().trim();
    cityInput = temp.toString();
    var placesURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + cityInput + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&radius=5000&key=";

    function initialize() {
        $.ajax({
            url: corsResolve + placesURL + apiKey,
            method: 'GET',
        }).then(function (response) {
            latCity = (response.candidates[0].geometry.location.lat);
            lngCity = (response.candidates[0].geometry.location.lng);
            initMap(latCity, lngCity);
        })
    }
    initialize();
})

// Search category button on clicks
$(".logo-col").on('click', function () {

    category = $(this).attr("id");

    //Grabbing info from Yelp
    var myurl = corsResolve + "https://api.yelp.com/v3/businesses/search?" + "&location=" + cityInput + "&radius=5000&openNow=true&sortBy=rating&limit=5&categories=" + category;

    //YELP API ajax call
    $.ajax({
        url: myurl,
        headers: {
            'Authorization': 'Bearer ' + API_key,
        },
        method: 'GET',
        success: function (data) {
            for (var i = 0; i < data.businesses.length; i++) {
                var obj = {
                    name: data.businesses[i].name,
                    latitude: data.businesses[i].coordinates.latitude,
                    longitude: data.businesses[i].coordinates.longitude
                };
                yelp.push(obj);
            }

            var latLogo = yelp[0].latitude;
            var lngLogo = yelp[0].longitude;

            for (var j = 0; j < yelp.length; j++) {
                latLogo = yelp[j].latitude;
                lngLogo = yelp[j].longitude;
                var pushLatLng = {
                    lat: latLogo,
                    lng: lngLogo
                };
                locations.push(pushLatLng);
            }
            initMap(latCity, lngCity);
        }
    });
})

var historyOn = false

$("#history").on("click", function renderRecent(recent) {

    var recent = JSON.parse(localStorage.getItem("recentSearch"));

    if (historyOn === false) {
        for (var y = 0; y < recent.length; y++) {
            var searches = $("<a class='city' href='#'>" + recent[y] + "</a>");
            historyOn = true;
            $("#hist-bar").append(searches)
        }
    } else {
        $("#hist-bar").empty();
        historyOn = false;
    }
})

$("#find-city").on("click", function (event) {
    event.preventDefault();

    if (previousSearches.indexOf(cityInput) === -1 && cityInput !== "") {

        if(previousSearches.length < 8) {
        previousSearches.push(cityInput)
        recent = previousSearches
    } else {
        previousSearches.shift()
        previousSearches.push(cityInput)
        recent = previousSearches
     }}
    localStorage.setItem("recentSearch", JSON.stringify(recent));
});

// History menu on click
$("#hist-bar").on("click", ".city", function() {
    event.preventDefault();

    var temp = $(this).text();
    cityInput = temp.toString();
    var placesURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + cityInput + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&radius=5000&key=";
    $("#hist-bar").empty();
    historyOn = false;

    function initialize() {
        $.ajax({
            url: corsResolve + placesURL + apiKey,
            method: 'GET',
        }).then(function (response) {
            latCity = (response.candidates[0].geometry.location.lat);
            lngCity = (response.candidates[0].geometry.location.lng);
            initMap(latCity, lngCity);
        })
    }
    initialize();
})


$(".gm-style").hover("img", function() {

})

var ClickEventHandler = function(map, origin) {
    this.origin = origin;
    this.map = map;
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setMap(map);
    this.placesService = new google.maps.places.PlacesService(map);
    this.infowindow = new google.maps.InfoWindow;
    this.infowindowContent = document.getElementById('infowindow-content');
    this.infowindow.setContent(this.infowindowContent);

    // Listen for clicks on the map.
    this.map.addListener('click', this.handleClick.bind(this));
  };

  ClickEventHandler.prototype.handleClick = function(event) {
    console.log('You clicked on: ' + event.latLng);
    // If the event has a placeId, use it.
    if (event.placeId) {
      console.log('You clicked on place:' + event.placeId);

      // Calling e.stop() on the event prevents the default info window from
      // showing.
      // If you call stop here when there is no placeId you will prevent some
      // other map click event handlers from receiving the event.
      event.stop();
      this.getPlaceInformation(event.placeId);
    }
  };
