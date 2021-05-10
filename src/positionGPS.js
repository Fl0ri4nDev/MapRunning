export default class positionGPS {
  constructor(pLat, pLon) {
    this.lat = pLat;
    this.lon = pLon;
  }

  getLat() {
    return this.lat;
  }

  getLon() {
    return this.lon;
  }

  toString() {
    return "[" + this.lat + " - " + this.lon + "]";
  }
}
