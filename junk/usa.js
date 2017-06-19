$(document).ready(function() {
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
    selectedColor: '#5A964F',
    selectedRegions: ['NY', 'TX', 'CA', 'PA', 'ME', 'VT', 'MD', 'GA', 'FL', 'MA', 'NH', 'CT', 'NJ', 'IN'],
    multiSelectRegion: false,
    showTooltip: true,
    onRegionClick: function(element, code, region) {
            // var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
            // alert(message);
        },
    pins: { "NY" : "pin_for_ny", "CA" : "pin_for_ca" },
    pinMode: 'id'
  });  
});