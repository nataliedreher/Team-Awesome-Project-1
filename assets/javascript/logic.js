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

var cityInput = "";

event.preventDefault();
cityInput = $('#exampleFormControlInput1').val().trim();

var placesURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + cityInput + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&radius=5000&key=";

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
