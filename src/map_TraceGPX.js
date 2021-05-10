export default class map_TraceGPX {
  constructor() {
    this.canvas = document.getElementById("Screen");
    this.canvas.width = 500;
    this.canvas.height = 500;
  }

  drawAllPosition(pListPosition) {
    var margin = 100;
    var ctx = this.canvas.getContext("2d");

    var drawing_HEIGHT = this.canvas.height - margin;
    var drawing_WIDTH = this.canvas.width - margin;

    var background = new Image();
    background.src =
      "https://images.freeimages.com/images/small-previews/2a7/polly-background-1631651.jpg";

    ctx.drawImage(background, 0, 0);
    var MIN_LONG = Math.min.apply(
      Math,
      pListPosition.map(function (o) {
        return o.lon;
      })
    );
    var MAX_LONG = Math.max.apply(
      Math,
      pListPosition.map(function (o) {
        return o.lon;
      })
    );
    var MIN_LAT = Math.min.apply(
      Math,
      pListPosition.map(function (o) {
        return o.lat;
      })
    );
    var MAX_LAT = Math.max.apply(
      Math,
      pListPosition.map(function (o) {
        return o.lat;
      })
    );

    var i;
    for (i = 0; i < pListPosition.length; i++) {
      ctx.fillStyle = "#0000FF";
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 5;

      var y0 =
        drawing_HEIGHT -
        (drawing_HEIGHT * (pListPosition[i].getLat() - MIN_LAT)) /
          (MAX_LAT - MIN_LAT);

      var x0 =
        (drawing_WIDTH * (pListPosition[i].getLon() - MIN_LONG)) /
        (MAX_LONG - MIN_LONG);

      if (i < pListPosition.length - 1) {
        var y1 =
          drawing_HEIGHT -
          (drawing_HEIGHT * (pListPosition[i + 1].getLat() - MIN_LAT)) /
            (MAX_LAT - MIN_LAT);
        var x1 =
          (drawing_WIDTH * (pListPosition[i + 1].getLon() - MIN_LONG)) /
          (MAX_LONG - MIN_LONG);

        x0 = x0 + margin / 2;
        y0 = y0 + margin / 2;
        x1 = x1 + margin / 2;
        y1 = y1 + margin / 2;

        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      }
    }
  }
}
