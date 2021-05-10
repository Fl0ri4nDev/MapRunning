import Activite from "./Activite";
import map_TraceGPX_Carte from "./map_TraceGPX_Carte";
import map_TraceGPX from "./map_TraceGPX";
import positionGPS from "./positionGPS";

import "./styles.css";

var map = new map_TraceGPX_Carte().getMap();
var monActivite = new Activite();

importGPX();

function importGPX() {
  document.getElementById("inputfile").addEventListener("change", function () {
    var fr = new FileReader();
    fr.onload = function () {
      var parser = new DOMParser();
      var doc = parser.parseFromString(fr.result, "text/xml");
      get_gpx_data(doc);
      draw_Activite(1, monActivite);
      draw_Activite(0, monActivite);
    };

    fr.readAsText(this.files[0]);
  });
}

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

function draw_Activite(pTypeCarte, pActivite) {
  if (pTypeCarte === 1) {
    var myTrace = new map_TraceGPX();
    myTrace.drawAllPosition(pActivite.parcours);
  } else {
    var polyline = window.L.polyline(pActivite.getArrayPositions()).addTo(map);
    map.fitBounds(polyline.getBounds());
  }
}
