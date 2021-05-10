export default class map_TraceGPX_Carte {
  constructor() {
    this.map = window.L.map("map").setView([48.833, 2.333], 13); // LIGNE 18
    //Carte réalisée via Mapbox

    var osmLayer = window.L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "fl0ri4ndev/ckoiu1p9k00nq17o8gn1vdwrr",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiZmwwcmk0bmRldiIsImEiOiJja29pdG9zd2cwbnduMndqejYxdjVvOXYzIn0.iZv_HblN-rEXTr_Nh86OzQ"
      }
    ).addTo(this.map);
    this.map.addLayer(osmLayer);
  }

  getMap() {
    return this.map;
  }
}
//Mp
/*
var osmLayer = window.L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  // LIGNE 20
  attribution: "© OpenStreetMap contributors",
  maxZoom: 600
});
*/
