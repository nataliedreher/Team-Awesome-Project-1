
var cityInput;
var corsResolve = "https://cors-anywhere.herokuapp.com/";
var apiKey = "AIzaSyAF-eDyAVsjiIBHAVrCNFhwrHuHHGVtGqg";
var cityInput = "";
var yelp = [];

var map;
var lctn = "denver";
var term = "italian";
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

    var obj = {name: data.businesses[i].name, latitude: data.businesses[i].coordinates.latitude, longitude: data.businesses[i].coordinates.longitude};
    yelp.push(obj);
    console.log(yelp);
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
        })
    }
    initialize();
})

//Grabbing info from Yelp
