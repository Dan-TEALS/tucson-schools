// tucson19-20.js
// A Leaflet.js map of all of the likeliest TEALS schools in Tucson, Arizona for AY 2019/20.
// Author: Dan Stormont, Tucson Regional Manager

var tucson19map = L.map('tucson19-20').setView([32.173635, -110.944192], 10.5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGFuLXRlYWxzIiwiYSI6ImNqbTg0eDlrYzEzMnczcW4zZzN2cXY5Y3EifQ.PfwYekufhAPkH9uKauMpPw'
}).addTo(tucson19map);


var allMarker = L.circle([32.3028515,-111.0672717], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

allMarker.bindPopup("<b>Accelerated Learning Laboratory</b><br>Intro Full<br>Lab Support");

var andradaMarker = L.circle([32.018539,-110.7782042], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

andradaMarker.bindPopup("<b>Andrada Polytechnic High School</b><br>Intro Full<br>Lab Support");

var catalinaMarker = L.circle([32.2440319,-110.9169739], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

catalinaMarker.bindPopup("<b>Catalina High School</b><br>Intro Full<br>Co-Teach");

var changemakerMarker = L.circle([32.2045255,-110.8993928], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

changemakerMarker.bindPopup("<b>Changemaker High School</b><br>Intro Full<br>Co-Teach");

var chollaMarker = L.circle([32.2064188,-111.0126173], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

chollaMarker.bindPopup("<b>Cholla High School</b><br>Intro Full<br>Co-Teach");

var empireMarker = L.circle([32.0885215,-110.7653317], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

empireMarker.bindPopup("<b>Empire High School</b><br>Intro Both<br>Lab Support");

var haSanMarker = L.circle([32.2227813,-110.9534704], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

haSanMarker.bindPopup("<b>Ha:San Preparatory & Leadership School</b><br>Python Both<br>Lab Support");

var lasArtesMarker = L.circle([32.2014514,-110.9713678], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

lasArtesMarker.bindPopup("<b>Las Artes Arts & Education Center</b><br>Intro Both<br>Lab Support");

var paloVerdeMarker = L.circle([32.2051817,-110.846691], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

paloVerdeMarker.bindPopup("<b>Palo Verde High School</b><br>Intro Full<br>Co-Teach");

var pccAbeccMarker = L.circle([32.23598,-110.9967369], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

pccAbeccMarker.bindPopup("<b>Pima Community College<br>Adult Basic Education for College & Career</b><br>Intro Full<br>Co-Teach");

var pvhsInaMarker = L.circle([32.3371044,-111.074484], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

pvhsInaMarker.bindPopup("<b>Pima Vocational High School<br>Ina Campus</b><br>Intro Full<br>Co-Teach");

var pvhsIrvingtonMarker = L.circle([32.1628333,-110.9726509], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

pvhsIrvingtonMarker.bindPopup("<b>Pima Vocational High School<br>Irvington Campus</b><br>Intro Full<br>Co-Teach");

var presidioMarker = L.circle([32.2654309,-110.9488462], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

presidioMarker.bindPopup("<b>Presidio School</b><br>Intro Full<br>Lab Support");

var puebloMarker = L.circle([32.1823114,-110.9818188], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

puebloMarker.bindPopup("<b>Pueblo High School</b><br>Intro Full<br>Co-Teach");

var rinconMarker = L.circle([32.2277055,-110.8907557], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

rinconMarker.bindPopup("<b>Rincon High School</b><br>Intro Full<br>Co-Teach");

var sabinoMarker = L.circle([32.2988375,-110.7905549], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

sabinoMarker.bindPopup("<b>Sabino High School</b><br>Intro Full<br>Co-Teach");

var sahuaroMarker = L.circle([32.2269479,-110.8097013], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

sahuaroMarker.bindPopup("<b>Sahuaro High School</b><br>Intro Full<br>Co-Teach");

var sanMiguelMarker = L.circle([32.1312685,-110.9744497], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

sanMiguelMarker.bindPopup("<b>San Miguel High School</b><br>Intro Full<br>Co-Teach");

var santaRitaMarker = L.circle([32.1759371,-110.8253119], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

santaRitaMarker.bindPopup("<b>Santa Rita High School</b><br>Intro Full<br>Co-Teach");

var tanqueVerdeMarker = L.circle([32.2857285,-110.7584427], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

tanqueVerdeMarker.bindPopup("<b>Tanque Verde High School</b><br>AP CS A<br>Co-Teach");

var tucsonMarker = L.circle([32.2270903,-110.9637976], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson19map);

tucsonMarker.bindPopup("<b>Tucson High School</b><br>Intro Full<br>Co-Teach");
