import "./styles.css";

var map = window.L.map("map").setView([48.833, 2.333], 13); // LIGNE 18

var osmLayer = window.L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiZmwwcmk0bmRldiIsImEiOiJja29pdHF4MHowM2djMnVtbDFjYjk4dGM3In0.PaQD3V5FHDDZv4TUueJeSg"
  }
).addTo(map);

/*
var osmLayer = window.L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  // LIGNE 20
  attribution: "© OpenStreetMap contributors",
  maxZoom: 600
});
*/
map.addLayer(osmLayer);
