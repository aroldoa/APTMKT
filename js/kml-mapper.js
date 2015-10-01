// Layer domain
	var layerDomain = 'http://www.aptmktdata.com/';
	var layers=[];
	layers[0] = new  google.maps.KmlLayer(layerDomain + "data/Points-Both-Less77-2015.KML",
	 {preserveViewport: true});

	layers[1] = new google.maps.KmlLayer(layerDomain + "data/2016-Rep-Home-Addresses-84th-Leg..KML",
	{preserveViewport: true});

	layers[2] = new google.maps.KmlLayer(layerDomain + "data/Points-Both+77-2015.KML",
	{preserveViewport: true});

	layers[3] = new google.maps.KmlLayer(layerDomain + "data/Points-High-Less77-2015.KML?v=5",
	{preserveViewport: true});

	layers[4] = new google.maps.KmlLayer(layerDomain + "data/Affordable-Seniors-July-2015.KML",
	{preserveViewport: true});

	layers[5] = new google.maps.KmlLayer(layerDomain + "data/Points-Middle-Less77-2015.KML",
	{preserveViewport: true});

	layers[6] = new google.maps.KmlLayer(layerDomain + "data/Points-Middle+77-2015.KML",
	{preserveViewport: true});

	layers[7] = new google.maps.KmlLayer(layerDomain + "data/Points-High+77-2015.KML",
	{preserveViewport: true});

	layers[8] = new google.maps.KmlLayer(layerDomain + "data/Affordable-Family-July-2015.KML",
	{preserveViewport: true});

	layers[9] = new google.maps.KmlLayer(layerDomain + "data/Points-Elementary-Less77-2015.KML",
	{preserveViewport: true});

	layers[10] = new google.maps.KmlLayer(layerDomain + "data/Points-Elementary+77-2015.KML",
	{preserveViewport: true});

	layers[11] = new google.maps.KmlLayer(layerDomain + "data/2016-Both-Met-Std-Less-77-v1-Master-File.KML",
	{preserveViewport: true});

	var map;


( function() {		


	var latlng = new google.maps.LatLng(32, -98 /*52.5028910, 13.41032740 */);
	var myOptions = {
	        zoom: 5,
	        center: latlng,
	        mapTypeId: google.maps.MapTypeId.TERRAIN
	}
	map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);

} )();

function toggleLayers(i)
{
        
  if(layers[i].getMap()==null) {
    layers[i].setMap(map);
  }
  else {
    layers[i].setMap(null);
  }
  document.getElementById('status').innerHTML += "toggleLayers("+i+") [setMap("+layers[i].getMap()+"] returns status: "+layers[i].getStatus()+"<br>";
}
