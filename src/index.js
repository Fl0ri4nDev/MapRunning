import Activite from "./Activite";
import positionGPS from "./positionGPS";

import "./styles.css";

var map = window.L.map("map").setView([48.833, 2.333], 13); // LIGNE 18

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
).addTo(map);

/*
var osmLayer = window.L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  // LIGNE 20
  attribution: "© OpenStreetMap contributors",
  maxZoom: 600
});
*/

map.addLayer(osmLayer);
var monActivite = new Activite();

document.getElementById("inputfile").addEventListener("change", function () {
  var fr = new FileReader();
  fr.onload = function () {
    var parser = new DOMParser();
    var doc = parser.parseFromString(fr.result, "text/xml");
    get_gpx_data(doc);

    var polyline = window.L.polyline(monActivite.getArrayPositions()).addTo(
      map
    );
    //console.log(parcours);
  };

  fr.readAsText(this.files[0]);
});

function get_gpx_data(node) {
  if (node.nodeName == "trkpt") {
    var myPos = new positionGPS(
      parseFloat(node.attributes["lat"].value),
      parseFloat(node.attributes["lon"].value)
    );
    monActivite.parcours.push(myPos);
  } else
    for (var i = 0; i < node.childNodes.length; i++) {
      get_gpx_data(node.childNodes[i]);
    }
}

//console.log();
