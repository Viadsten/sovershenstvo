jQuery(document).ready(function($){
	//set your google maps parameters
	var $latitude = 59.936081,
		$longitude = 30.358416,
		$map_zoom = 15;

	//google map custom marker icon - .png fallback for IE11
	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var $marker_url = ( is_internetExplorer11 ) ? 'https://sovershenstvospb.ru/assets/cd.svg' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location_1.svg';
		
	//define the basic color of your map, plus a value for saturation and brightness
	var	$main_color = '#171e26',
	    $main2_color = '#1d2530',
	    $alt_color = '#b3936d',
		$saturation= -30,
		$brightness= 0;

	//we define here the style of the map
	var style= [
  {
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#171e26"
      },
      {
        "lightness": 85
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#1d2530"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#a5b4c9"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#344356"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#171e26"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#171e26"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#171e26"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#171e26"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#171e26"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#171e26"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#171e26"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b3936d"
      },
      {
        "lightness": 10
      },
      {
        "visibility": "on"
      },
      {
        "weight": 2
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#b3936d"
      },
      {
        "visibility": "on"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "weight": 3
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#171e26"
      }
    ]
  }
];
		
	//set google map options
	var map_options = {
      	center: new google.maps.LatLng($latitude, $longitude),
      	zoom: $map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style,
    }
    //inizialize the map
	var map = new google.maps.Map(document.getElementById('google-container2'), map_options);
	//add a custom marker to the map				
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng($latitude, $longitude),
	    map: map,
	    visible: true,
	 	icon: $marker_url,
	});

	//add custom buttons for the zoom-in/zoom-out on the map
	function CustomZoomControl(controlDiv, map) {
		//grap the zoom elements from the DOM and insert them in the map 
	  	var controlUIzoomIn= document.getElementById('cd-zoom-in'),
	  		controlUIzoomOut= document.getElementById('cd-zoom-out');
	  	controlDiv.appendChild(controlUIzoomIn);
	  	controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		    map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		    map.setZoom(map.getZoom()-1)
		});
	}

	var zoomControlDiv = document.createElement('div');
 	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

  	//insert the zoom div on the top left of the map
  	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
});