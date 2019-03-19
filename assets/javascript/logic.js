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