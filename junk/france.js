var green = "#65A859";
var grey = "#333";
var darkerGreen = "#5A964F";
var lightGrey = "#eff6ee";
var paleGreen = "A3CB9C";

$(document).ready(function() {
    $('#vmap').vectorMap({ 
        map: 'france_fr',
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
        selectedRegions: ['FR-75', 'FR-17', 'FR-44', 'FR-85', 'FR-50', 'FR-14', 'FR-35', 'FR-94', 'FR-41', 'FR-37'],
        // https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
        multiSelectRegion: false,
        showTooltip: true,
        onRegionClick: function(element, code, region) {
            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
            alert(message);
            clickedRegion(code.toUpperCase());
        }
    });  
});
