function loadFile(pFilename) {
  var parser;
  var xmlDoc;

  if (window.DOMParser) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(pFilename, "text/xml");
  }
}

function fileLoader() {
  var input, file, fr;

  if (typeof window.FileReader !== "function") {
    alert("The file API isn't supported on this browser yet.");
    return;
  }

  if (!input) {
    alert("Um, couldn't find the fileinput element.");
  } else if (!input.files) {
    alert(
      "This browser doesn't seem to support the `files` property of file inputs."
    );
  } else if (!input.files[0]) {
    alert("Please select a file before clicking 'Load'");
  } else {
    file = input.files[0];
    fr = new FileReader();
    loadFile(file);
    // fr.readAsText(file);
  }
}
/*

		function parseXml(xmlstr)
		{
			var doc = new DOMParser().parseFromString(xmlstr, "text/xml");
			return get_gpx_data(doc.documentElement);
		}
	
		function get_gpx_data(node, result) {
			if(!result)
				result = { segments: [] };
				
			switch(node.nodeName)
			{
				case "name":
					var p = $("<p />");
					p.text(node.nodeName + " = " + node.textContent);
					result.name = node.textContent;
					$("#log").append(p);
					break;
					
				case "trkseg":
					var segment = [];
					result.segments.push(segment)
					for(var i=0; i<node.childNodes.length; i++)
					{
						var snode = node.childNodes[i];
						if(snode.nodeName == "trkpt")
						{
							var trkpt = { loc: [ parseFloat(snode.attributes["lat"].value), parseFloat(snode.attributes["lon"].value) ] };
							for(var j=0; j<snode.childNodes.length; j++)
							{
								var ssnode = snode.childNodes[j];
								switch(ssnode.nodeName)
								{
									case "time":
										trkpt.time = new Date(ssnode.childNodes[0].data);
										break;
									case "ele":
										trkpt.ele = parseFloat(ssnode.childNodes[0].data);
										break;
								}
							}
							segment.push(trkpt)
						}
					}
					break;
			}
		
			for(var i=0; i<node.childNodes.length; i++)
			{
				get_gpx_data(node.childNodes[i], result);
			}
			return result;
		}
		
		function convert_to_latlng(segment)
		{
			var result = [];
			for(var i=0; i<segment.length; i++)
			{
				result.push(new google.maps.LatLng(segment[i].loc[0], segment[i].loc[1]));
			}
			return result;
		}
		
		function get_bounds(gpx_data)
		{
			var result = { s: 90.0, n: -90, e: -180.0, w: 180.0 };
			for(var i=0; i<gpx_data.segments.length; i++)
			{
				for(var j=0; j<gpx_data.segments[i].length; j++)
				{
					var point = gpx_data.segments[i][j];
					if(result.s > point.loc[0]) result.s = point.loc[0];
					if(result.n < point.loc[0]) result.n = point.loc[0];
					if(result.e < point.loc[1]) result.e = point.loc[1];
					if(result.w > point.loc[1]) result.w = point.loc[1];
				}
			}	
			return result;
		}
		

			$("#fileinput").change(function() { 
				loadFile($("#fileinput")[0], function(xml) {
					result = parseXml(xml);
					
					var bounds = get_bounds(result);
					var points = convert_to_latlng(result.segments[0]);
					
					var myLatlng = new google.maps.LatLng(-34.397, 150.644);
					var myOptions = {
					  zoom: 8,
					  center: myLatlng,
					  mapTypeId: google.maps.MapTypeId.ROADMAP
					}
					
					var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
					
					var southWest = new google.maps.LatLng(bounds.s,bounds.w);
					var northEast = new google.maps.LatLng(bounds.n,bounds.e);
					var bounds = new google.maps.LatLngBounds(southWest,northEast);
					map.fitBounds(bounds);

					
					var flightPath = new google.maps.Polyline({
						path: points,
						strokeColor: "#FF0000",
						strokeOpacity: 1.0,
						strokeWeight: 2
					  });

					  flightPath.setMap(map);
					  
					for(var j=0; j<points.length; j++)
					{
						var marker = new google.maps.Marker({
						  position: points[j],
						  title:"Hello World!"
					  });
						marker.setMap(map);
					}

				});
			});
*/
