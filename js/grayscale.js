/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    fadeleft();
    faderight();
    progressbar();
});

function progressbar() {
     /* Check the location of each desired element */
     var objectBottom = $('#traits').offset().top + $('#traits').outerHeight();
     var windowBottom = $(window).scrollTop() + $(window).innerHeight();

     /* If the object is completely visible in the window, fade it in */
     if (objectBottom < windowBottom) {
       $('#MS').animate({'width':'90%'},300);
       $('#ILLUSTRATOR').animate({'width':'80%'},300);
       $('#HTML').animate({'width':'70%'},300);
       $('#ENGLISH').animate({'width':'95%'},300);
       $('#PHOTOSHOP').animate({'width':'85%'},300);
       $('#CS').animate({'width':'70%'},300);
     }else{
       $('#MS').animate({'width':'0%'},100);
       $('#ILLUSTRATOR').animate({'width':'0%'},100);
       $('#HTML').animate({'width':'0%'},100);
       $('#ENGLISH').animate({'width':'0%'},100);
       $('#PHOTOSHOP').animate({'width':'0%'},100);
       $('#CS').animate({'width':'0%'},100);
     }


 }


function fadeleft() {
   $('.fade-left').each(function() {
     /* Check the location of each desired element */
     var objectBottom = $(this).offset().top + $(this).outerHeight();
     var windowBottom = $(window).scrollTop() + $(window).innerHeight();

     /* If the object is completely visible in the window, fade it in */
     if (objectBottom < windowBottom) {
       $(this).animate({'opacity':'1','margin-left':'22%'},500);
     }
   });


 }

function faderight(){
   $('.fade-right').each(function() {
     /* Check the location of each desired element */
     var objectBottom = $(this).offset().top + $(this).outerHeight();
     var windowBottom = $(window).scrollTop() + $(window).innerHeight();

     /* If the object is completely visible in the window, fade it in */
     if (objectBottom < windowBottom) {
       $(this).animate({'opacity':'1','margin-right':'22%'},500);
     }
   });
 }

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
//google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
