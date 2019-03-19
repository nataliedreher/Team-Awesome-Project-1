var map;
var lctn = "denver";
var term = "italian";
var category = "food"

function initMap() {
    // The location of Uluru
    var uluru = {
        lat: -25.344,
        lng: 131.036
    };
    // possible alternative to Uluru
    var latlng = new google.maps.LatLng(-25.344, -131.036);
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('gmap_canvas'), {
            zoom: 4,
            center: latlng
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });

}


$(".logo-col").on("click", function () {
    // alert("test")
    var btnPushed = $(this).attr("id")

})

// "https://api.yelp.com/v3/businesses/search?category=" + term + "&location=" + lctn;

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

function bleh() {
$.ajax({
    url: 'https://cors-anywhere.herokuapp.com/' + "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyAF-eDyAVsjiIBHAVrCNFhwrHuHHGVtGqg",
    method: 'GET'}).then(function(resp) {
        console.log(resp)
    })

    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/' + "https://maps.googleapis.com/maps/api/directions/json?&origin=Brooklyn&destination=75+9TH+AVE,+New+York,NY&waypoints=optimize:true|350+5th+ave,+New+York,+NY|165+avenue+A,+New+York|1520+york+ave,+new+york,+ny|&avoid=highways&key=AIzaSyAF-eDyAVsjiIBHAVrCNFhwrHuHHGVtGqg",
        method: 'GET'}).then(function(resp) {
            console.log(resp)
        })
    

}


// "https://maps.googleapis.com/maps/api/directions/json?&origin=Brooklyn&destination=75+9TH+AVE,+New+York,NY&waypoints=optimize:true|350+5th+ave,+New+York,+NY|165+avenue+A,+New+York|1520+york+ave,+new+york,+ny|&avoid=highways&key=AIzaSyAF-eDyAVsjiIBHAVrCNFhwrHuHHGVtGqg"
           
// required parameters: origin and destination pair - can be string or latitude longitude, API key
// mode= bicycling, transit, driving, walking
// waypoints = stops,
// optimize: true (best route),
// use "|" to separate waypoints,
// avoid: can avoid tollways, ferries, highways
// via = just to walk by the point
// Collapse





