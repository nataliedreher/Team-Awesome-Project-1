function produceSearch(term) {
    var _params = {
        radius : 11000,
        name : term,
        location : (39.7392, -104.9903),
        key : 'AIzaSyAF-eDyAVsjiIBHAVrCNFhwrHuHHGVtGqg',
    };
    var service = new google.maps.places.PlacesService(map_inst);
    service.search(_params, requestSucceeded);
}

console.log(produceSearch("greens"));