import PositionGPS from "./positionGPS.js";
export default class Activite {
  constructor() {
    this.nom = "Activité #1";
    this.date = "Date Activité";
    this.parcours = [];
    this.parcours.push(new PositionGPS(48.865618, 2.337194));
  }

  getPosition(pIndex) {
    return this.parcours[pIndex];
  }
  toString() {
    return "[" + this.lat + " - " + this.lon + "]";
  }
}
