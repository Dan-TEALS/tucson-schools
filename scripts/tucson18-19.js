// tucson18-19.js
// Script to create a Leaflet.js map of all of the TEALS schools in Tucson, Arizona for AY 2018/19.
// Author: Dan Stormont, Tucson Regional Manager

var tucson18map = L.map('tucson18-19').setView([32.173635, -110.944192], 10.5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGFuLXRlYWxzIiwiYSI6ImNqbTg0eDlrYzEzMnczcW4zZzN2cXY5Y3EifQ.PfwYekufhAPkH9uKauMpPw'
}).addTo(tucson18map);

// Non-Social Catalyst Schools for AY 2018/19
var allMarker = L.circle([32.3028515,-111.0672717], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

allMarker.bindPopup("<b>Accelerated Learning Laboratory</b><br>Intro Full<br>Lab Support<br>1st Year with TEALS");

var andradaMarker = L.circle([32.018539,-110.7782042], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

andradaMarker.bindPopup("<b>Andrada Polytechnic High School</b><br>Intro Full<br>Co-Teach<br>2nd Year with TEALS");

var chollaMarker = L.circle([32.2064188,-111.0126173], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

chollaMarker.bindPopup("<b>Cholla High School</b><br>Intro Full<br>Co-Teach<br>1st Year with TEALS");

var desertViewMarker = L.circle([32.1359695,-110.9064352], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

desertViewMarker.bindPopup("<b>Desert View High School</b><br>Other<br>Classroom Enrichment<br>3rd Year with TEALS");

var empireMarker = L.circle([32.0885215,-110.7653317], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

empireMarker.bindPopup("<b>Empire High School</b><br>Intro Both<br>Lab Support<br>2nd Year with TEALS");

var flowingWellsMarker = L.circle([32.2743956,-110.9982979], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

flowingWellsMarker.bindPopup("<b>Flowing Wells High School</b><br>AP CSP<br>Classroom Enrichment<br>2nd Year with TEALS");

var haSanMarker = L.circle([32.2227813,-110.9534704], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

haSanMarker.bindPopup("<b>Ha:San Preparatory & Leadership School</b><br>Python Both<br>Co-Teach<br>2nd Year with TEALS");

var lasArtesMarker = L.circle([32.2014514,-110.9713678], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

lasArtesMarker.bindPopup("<b>Las Artes Arts & Education Center</b><br>Intro Both<br>Co-Teach<br>2nd Year with TEALS");

var pccAbeccMarker = L.circle([32.23598,-110.9967369], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

pccAbeccMarker.bindPopup("<b>Pima Community College<br>Adult Basic Education for College & Career</b><br>Intro Full<br>Co-Teach<br>1st Year with TEALS");

var pvhsInaMarker = L.circle([32.3371044,-111.074484], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

pvhsInaMarker.bindPopup("<b>Pima Vocational High School<br>Ina Campus</b><br>Intro Full<br>Co-Teach<br>1st Year with TEALS");

var pvhsIrvingtonMarker = L.circle([32.1628333,-110.9726509], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

pvhsIrvingtonMarker.bindPopup("<b>Pima Vocational High School<br>Irvington Campus</b><br>Intro Full<br>Co-Teach<br>1st Year with TEALS");

var presidioMarker = L.circle([32.2654309,-110.9488462], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

presidioMarker.bindPopup("<b>Presidio School</b><br>Intro Full<br>Co-Teach<br>2nd Year with TEALS");

var sabinoMarker = L.circle([32.2988375,-110.7905549], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

sabinoMarker.bindPopup("<b>Sabino High School</b><br>Intro Full<br>Co-Teach<br>1st Year with TEALS");

var sahuaroMarker = L.circle([32.2269479,-110.8097013], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

sahuaroMarker.bindPopup("<b>Sahuaro High School</b><br>Intro Full<br>Co-Teach<br>1st Year with TEALS");

var santaRitaMarker = L.circle([32.1759371,-110.8253119], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

santaRitaMarker.bindPopup("<b>Santa Rita High School</b><br>Intro Full<br>Co-Teach<br>1st Year with TEALS");

var sunnysideMarker = L.circle([32.1429779,-110.9480608], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucson18map);

sunnysideMarker.bindPopup("<b>Sunnyside High School</b><br>Intro Full<br>Classroom Enrichment<br>3rd Year with TEALS");

