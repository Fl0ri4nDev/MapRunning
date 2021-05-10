import PositionGPS from "./positionGPS.js";
export default class Activite {
  constructor() {
    this.nom = "Activité #1";
    this.date = "Date Activité";
    this.parcours = [];
  }

  getMiddle() {
    var i;
    var minLatitude, maxLatitude;
    var minLongitude, maxLongitude;
    for (i = 0; i < this.parcours.length; i++) {
      if (this.parcours[i].getLat() < minLatitude)
        minLatitude = this.parcours[i].getLat();
      if (this.parcours[i].getLat() > maxLatitude)
        maxLatitude = this.parcours[i].getLat();

      if (this.parcours[i].getLon() < minLongitude)
        minLongitude = this.parcours[i].getlon();
      if (this.parcours[i].getLon() > maxLongitude)
        maxLongitude = this.parcours[i].getLon();
    }

    var middlePosition = new PositionGPS(
      (minLatitude + maxLatitude) / 2,
      (minLongitude + maxLongitude) / 2
    );
    return middlePosition;
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
    return result;
  }

  getPosition(pIndex) {
    return this.parcours[pIndex];
  }
  toString() {
    return "[" + this.lat + " - " + this.lon + "]";
  }
}
