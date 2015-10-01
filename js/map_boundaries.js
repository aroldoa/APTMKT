	 var map;
	 var gxml; 
//	 var proxy = "/cgi-bin/proxy.php?"

   jQuery(document).ready(function($){
       var kmlUrl = 'http://www.aptmktdata.com/data/archive_data_boundaries.kml';
         var myOptions = {
             mapTypeId: google.maps.MapTypeId.TERRAIN,
		 	zoom: 5,
		 	center: new google.maps.LatLng(32.04,-99.74)
		 	}
         map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	  	gxml = new GeoXml("gxml", map, kmlUrl, {
		 	sidebarid:"aptmkt-sidebar",
		 	// publishdirectory:"http://www.dyasdesigns.com/tntmap/",
		 	messagestyle:{opacity:1.0 ,backgroundColor:"#a0c0fE", borderWidth:"1px"},
		 	iwwidth:280
		 }); 
		gxml.parse(["KML Data"]);

  });