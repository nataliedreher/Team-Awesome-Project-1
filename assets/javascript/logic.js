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
