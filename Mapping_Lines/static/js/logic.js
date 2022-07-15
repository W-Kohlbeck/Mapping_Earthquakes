// Add console.log to check to see if our code is working. 
// The console.log() function with the phrase "working" inside the parentheses will help us confirm that our logic.js file is being accessed in the console on Chrome.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.1967, -97.6650], 5);

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790], // SFO
    [40.7899, -111.9791], // SLC
    //[47.4502, -122.3088]  // SEA
    //[33.9416, -118.4085], // LAX
    [30.1967, -97.6650], // AUS
    [40.6413, -73.7774], // JFK
    
    
    
  ];
  
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dasharray: "4 1"

  }).addTo(map);

// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Add 'graymap' tile layer to the map.
streets.addTo(map);