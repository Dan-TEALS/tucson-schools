// tucson-deltas.js
// A Leaflet.js map of anticipated changes in the TEALS schools in Tucson, Arizona for AY 2019/20.
// Author: Dan Stormont, Tucson Regional Manager

var tucsonDeltaMap = L.map('tucson-deltas').setView([32.148678, -110.947775], 10.5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGFuLXRlYWxzIiwiYSI6ImNqbTg0eDlrYzEzMnczcW4zZzN2cXY5Y3EifQ.PfwYekufhAPkH9uKauMpPw'
}).addTo(tucsonDeltaMap);

// Existing schools
var allMarker = L.circle([32.3028515,-111.0672717], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

allMarker.bindPopup("<b>Accelerated Learning Laboratory</b><br>Intro Full<br>Lab Support<br><em>No change</em>");

var andradaMarker = L.circle([32.018539,-110.7782042], {
    color: 'yellow',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

andradaMarker.bindPopup("<b>Andrada Polytechnic High School</b><br>Intro Full<br>Co-Teach<br><em>Transition to lab support</em>");

var chollaMarker = L.circle([32.2064188,-111.0126173], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

chollaMarker.bindPopup("<b>Cholla High School</b><br>Intro Full<br>Co-Teach<br><em>No change</em>");

var desertViewMarker = L.circle([32.1359695,-110.9064352], {
    color: 'black',
    fillColor: 'grey',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

desertViewMarker.bindPopup("<b>Desert View High School</b><br>Other<br>Classroom Enrichment<br><em>Graduate from TEALS</em>");

var empireMarker = L.circle([32.0885215,-110.7653317], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

empireMarker.bindPopup("<b>Empire High School</b><br>Intro Both<br>Lab Support<br><em>No change</em>");

var flowingWellsMarker = L.circle([32.2743956,-110.9982979], {
    color: 'black',
    fillColor: 'grey',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

flowingWellsMarker.bindPopup("<b>Flowing Wells High School</b><br>AP CSP<br>Classroom Enrichment<br><em>Graduate from TEALS</em>");

var haSanMarker = L.circle([32.2227813,-110.9534704], {
    color: 'yellow',
    fillColor: 'blue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

haSanMarker.bindPopup("<b>Ha:San Preparatory & Leadership School</b><br>Python Both<br>Co-Teach<br><em>Transition to lab support</em>");

var lasArtesMarker = L.circle([32.2014514,-110.9713678], {
    color: 'yellow',
    fillColor: 'blue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

lasArtesMarker.bindPopup("<b>Las Artes Arts & Education Center</b><br>Intro Both<br>Co-Teach<br><em>Transition to lab support</em>");

var pccAbeccMarker = L.circle([32.23598,-110.9967369], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

pccAbeccMarker.bindPopup("<b>Pima Community College<br>Adult Basic Education for College & Career</b><br>Intro Full<br>Co-Teach<br><em>No change</em>");

var pvhsInaMarker = L.circle([32.3371044,-111.074484], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

pvhsInaMarker.bindPopup("<b>Pima Vocational High School<br>Ina Campus</b><br>Intro Full<br>Co-Teach<br><em>No change</em>");

var pvhsIrvingtonMarker = L.circle([32.1628333,-110.9726509], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

pvhsIrvingtonMarker.bindPopup("<b>Pima Vocational High School<br>Irvington Campus</b><br>Intro Full<br>Co-Teach<br><em>No change</em>");

var presidioMarker = L.circle([32.2654309,-110.9488462], {
    color: 'yellow',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

presidioMarker.bindPopup("<b>Presidio School</b><br>Intro Full<br>Co-Teach<br><em>Transition to lab support</em>");

var sabinoMarker = L.circle([32.2988375,-110.7905549], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

sabinoMarker.bindPopup("<b>Sabino High School</b><br>Intro Full<br>Co-Teach<br><em>No change</em>");

var sahuaroMarker = L.circle([32.2269479,-110.8097013], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

sahuaroMarker.bindPopup("<b>Sahuaro High School</b><br>Intro Full<br>Co-Teach<br><em>No change</em>");

var santaRitaMarker = L.circle([32.1759371,-110.8253119], {
    color: 'blue',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

santaRitaMarker.bindPopup("<b>Santa Rita High School</b><br>Intro Full<br>Co-Teach<br><em>No change</em>");

var sunnysideMarker = L.circle([32.1429779,-110.9480608], {
    color: 'black',
    fillColor: 'gray',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

sunnysideMarker.bindPopup("<b>Sunnyside High School</b><br>Intro Full<br>Classroom Enrichment<br><em>Graduate from TEALS</em>");

// Potential new schools
var catalinaMarker = L.circle([32.2440319,-110.9169739], {
    color: 'lime',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

catalinaMarker.bindPopup("<b>Catalina High School</b><br>Intro Full<br>Co-Teach<br><em>New school</em>");

var paloVerdeMarker = L.circle([32.2051817,-110.846691], {
    color: 'lime',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

paloVerdeMarker.bindPopup("<b>Palo Verde High School</b><br>Intro Full<br>Co-Teach<br><em>New school</em>");

var puebloMarker = L.circle([32.1823114,-110.9818188], {
    color: 'lime',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

puebloMarker.bindPopup("<b>Pueblo High School</b><br>Intro Full<br>Co-Teach<br><em>New school</em>");

var rinconMarker = L.circle([32.2277055,-110.8907557], {
    color: 'lime',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

rinconMarker.bindPopup("<b>Rincon High School</b><br>Intro Full<br>Co-Teach<br><em>New school</em>");

var tucsonMarker = L.circle([32.2270903,-110.9637976], {
    color: 'lime',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

tucsonMarker.bindPopup("<b>Tucson High School</b><br>Intro Full<br>Co-Teach<br><em>New school</em>");

var tanqueVerdeMarker = L.circle([32.2857285,-110.7584427], {
    color: 'lime',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

tanqueVerdeMarker.bindPopup("<b>Tanque Verde High School</b><br>AP CS A<br>Co-Teach<br><em>New school</em>");

var sahuaritaMarker = L.circle([31.9588353,-110.9754347], {
    color: 'lime',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

sahuaritaMarker.bindPopup("<b>Sahuarita High School</b><br>Intro Full<br>Co-Teach<br><em>New school</em>");

var waldenGroveMarker = L.circle([31.9701075,-110.9358298], {
    color: 'lime',
    fillColor: 'teal',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

waldenGroveMarker.bindPopup("<b>Walden Grove High School</b><br>Intro Full<br>Co-Teach<br><em>New school</em>");

var changemakerMarker = L.circle([32.2045255,-110.8993928], {
    color: 'lime',
    fillColor: 'blue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

changemakerMarker.bindPopup("<b>Changemaker High School</b><br>Intro Full<br>Co-Teach<br><em>New school</em>");

var hiakiMarker = L.circle([32.1163233,-111.0693855], {
    color: 'lime',
    fillColor: 'blue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

hiakiMarker.bindPopup("<b>Hiaki High School</b><br>Intro Full<br>Co-Teach<br><em>New school</em>");

var sanMiguelMarker = L.circle([32.1312685,-110.9744497], {
    color: 'lime',
    fillColor: 'blue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

sanMiguelMarker.bindPopup("<b>San Miguel High School</b><br>Intro Full<br>Co-Teach<br><em>New school</em>");

var skyIslandsMarker = L.circle([32.2145779,-110.8654878], {
    color: 'lime',
    fillColor: 'blue',
    fillOpacity: 1.0,
    radius: 500
}).addTo(tucsonDeltaMap);

skyIslandsMarker.bindPopup("<b>Sky Islands High School</b><br>Intro Full<br>Co-Teach<br><em>New school</em>");

