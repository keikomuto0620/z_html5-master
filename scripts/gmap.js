function initialize() {
	var latlng=new google.maps.LatLng(34.769723, 137.680015);
	var myOptions = {
		zoom: 14,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("gmap"), myOptions);
	var marker = new google.maps.Marker({
		position: latlng, 
		map: map,
		title: '株式会社マ－リス'
	});
}
google.maps.event.addDomListener(window, 'load', initialize);