import PositionGPS from "./positionGPS.js";
export default class Activite {
  constructor() {
    this.nom = "Activité #1";
    this.date = "Date Activité";
    this.parcours = [];
  }

  getArrayPositions() {
    var result = [];
    var i;
    for (i = 0; i < this.parcours.length; i++) {
      var currentPosition = [];
      currentPosition.push(this.parcours[i].getLat());
      currentPosition.push(this.parcours[i].getLon());
      result.push(currentPosition);
    }
    console.log(result);
    return result;
  }

  getPosition(pIndex) {
    return this.parcours[pIndex];
  }
  toString() {
    return "[" + this.lat + " - " + this.lon + "]";
  }
}
