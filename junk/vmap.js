
var green = "#65A859";
var grey = "#333";
var darkerGreen = "#5A964F";
var lightGrey = "#eff6ee";
var paleGreen = "A3CB9C";

$(document).ready(function() {
    $('#vmap').vectorMap({ 
        map: 'world_en',
        backgroundColor: '#fff',
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: '#333',
        enableZoom: true,
        hoverColor: '#65A859',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#5A964F',
        selectedRegions: ['US', 'GB', 'FR', 'BS', 'CA', 'MA', 'ES', 'GR', 'NL', 'DE', 'CZ', 'HU', 'AT', 'IT'],
        // https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
        multiSelectRegion: false,
        showTooltip: true,
        onRegionClick: function(element, code, region) {
            clickedRegion(code.toUpperCase());
        }
    });  
});

function clickedRegion(code) {
    //only load new map files if requested
    if (code == "US") {
        //$('body').append('<script src="../jqvmap/dist/maps/jquery.vmap.usa.js"><\/script>')
        window.location.href = "usa.html";
        //america();
    }
}

function america () {
    $('#vmap').html('');
    $('#vmap').vectorMap({ 
        map: 'usa_en',
        backgroundColor: '#fff',
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: '#333',
        enableZoom: true,
        hoverColor: '#65A859',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#333',
        selectedRegions: null,
        showTooltip: true,
        onRegionClick: function(element, code, region) {
            // var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
            // alert(message);
        }
    });  
}
