/** *************Init JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	1.Ready function
	2.Load function
	3.Subscribe JS
	4.Full height function
	5.Resize function
	6.Coyote function
		1)Fullpage JS
		2)Tweeter JS
		3)Ticker JS
		4)Counter JS
		5)Services & Team carousel
		6)Map initialization js
	7.Service,Team toggle window
	8.LightGallery init
	9.Rotate Portfolio init
	10.Placehoder ie9
************************************* **/
 
 "use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
  coyote();
  $('.la-anim-1').addClass('la-animate');
});
/*****Ready function end*****/

/*****Load function start*****/
$(window).load(function(){
	$(".preloader-it").delay(500).fadeOut("slow");
});
/*****Load function* end*****/

/***** Subscribe JS start *****/
$("#notifyMe").notifyMe(); 
/***** Subscribe JS end*****/

/***** Full height function start *****/
var setHeight = function () {
	var height = $(window).height();
	$('.full-height').css('height', (height));
};
/***** Full height function end *****/


/***** Resize function start *****/
$(window).on("resize", function () {
	setHeight();
	var width = $(window).width();
	if(width <= 1330) {
		$(".copywrite-wrap").insertAfter($(".connect-add"));
	}
	else 
		{
		$(".copywrite-wrap").appendTo($(".right-patch"));
	}
	if(width <= 974) {
		$(".contact-form-wrap").insertBefore($(".contact-add"));
	}
	else 
		{
		$(".contact-form-wrap").insertAfter($(".contact-add"));
	}
}).resize();
/***** Resize function end *****/

/***** Coyote function start *****/
var coyote = function (){
	/*Fullpage JS*/
	$('#fullpage').fullpage({
		menu: '#menu',
		scrollBar:true,
		anchors: ['home_sec', 'about_sec', 'services_sec','contact_sec','video_sec','portfolio_sec','team_sec','features_sec','googlemap_sec'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['home', 'about', 'services','contact','video','portfolio','team','features','google map'],
		responsiveWidth: 3000
	});
	
	/*Fullpage JS*/
	$('#fullpage1').fullpage({
		menu: '#menu',
		scrollBar:true,
		anchors: ['abot_sec', 'networking', 'networking1', 'networking2', 'membership','initiatives','advisory','partners','section7'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['about', 'networking', 'membership','Advisory','membership','initiatives','advisory','partners','contact'],
		responsiveWidth: 3000
	});
	/*Fullpage JS*/
	$('#fullpage2').fullpage({
		menu: '#menu',
		scrollBar:true,
		anchors: ['what_sec', 'why_sec', 'csr_process','shedule_sec','csr_provisions','contact_sec'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['what', 'why/when/how', 'csr/process','areas/shedule','csr/provisions','contact'],
		responsiveWidth: 3000
	});
	
	/*Tweeter JS*/
	//$('#tweecool').tweecool({
//      //settings
//       username : 'envato', 
//       limit : 2	
//    });
	
	//$('a').click(function() {
//   $.scrollTo($('#section1'), 3000);
//});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
	/*Ticker JS*/
	var nt_title = $('#nt-title').newsTicker({
		row_height: 160,
		max_rows: 1,
		duration: 4000,
		speed: 400,
		pauseOnHover: 1
	});
	
	/*Counter JS*/
	$('#countdown').countdown({ 
		date: '10/24/2016',
	});
	
	/*Services & Team carousel*/
	$('.services-slider').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		navText: ["<img src='img/leftarrow.png' alt='nav'/>","<img src='img/rightarrow.png' alt='nav'/>"],
		dots:false,
		responsive:{
			0:{
				items:1,
				margin:0
			},
			768:{
				items:2
			},
			1401:{
				items:3
			}
		}
	});
	
	$('.team-slider').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		navText: ["<img src='img/leftarrow.png' alt='nav'/>","<img src='img/rightarrow.png' alt='nav'/>"],
		dots:false,
		responsive:{
			0:{
				items:1,
				margin:0
			},
			768:{
				items:2
			},
			1024:{
				items:3
			},
			1401:{
				items:4
			}
		}
	});
	
	$('.owl-prev,.owl-next').unwrap();
	$('.owl-prev,.owl-next').unwrap();
	$('.owl-dots').remove();
	
	// partner Slider
        var partner_slid = $('.partner_slider');
        partner_slid.owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
	
	/* Map initialization js*/
	if( $('#map_canvas').length > 0 ){	
		var settings = {
			zoom: 16,
			center: new google.maps.LatLng(43.270441,6.640888),
			mapTypeControl: false,
			scrollwheel: false,
			draggable: true,
			panControl:false,
			scaleControl: false,
			zoomControl: false,
			streetViewControl:false,
			navigationControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		 styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]};		
		var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});	
		var contentString = '<div id="content-map-marker" style="text-align:left; padding-top:10px; padding-left:10px">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h4 id="firstHeading" class="firstHeading" style="color:#000; margin-bottom:0px;"><strong>Hello Friend!</strong></h4>'+
			'<div id="bodyContent">'+
			'<p style="font-family:Verdana; color:#999; font-size:12px; margin-bottom:10px">Here we are. Come to drink a coffee!</p>'+
			'</div>'+
			'</div>';
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});	
		var companyImage = new google.maps.MarkerImage('img/pin-dark.png',
			new google.maps.Size(58,63),<!-- Width and height of the marker -->
			new google.maps.Point(0,0),
			new google.maps.Point(35,20)<!-- Position of the marker -->
		);
		var companyPos = new google.maps.LatLng(43.270441,6.640888);	
		var companyMarker = new google.maps.Marker({
			position: companyPos,
			map: map,
			icon: companyImage,               
			title:"Our Office",
			zIndex: 3});	
		google.maps.event.addListener(companyMarker, 'click', function() {
			infowindow.open(map,companyMarker);
		});
	}
}
/***** Coyote function end *****/

/***** Service,Team toggle window start*****/
$(document).on( 'click', ".services-item .toggle-expand,.team-person .toggle-expand", function (e) {
	e.preventDefault();
	e.stopPropagation();
	var $this = $(this).parent();
	if(($this.find('.expand-content').hasClass('expand-visible')) && (!$this.find('.excont').hasClass('opacity-hide')) ) { 
		$this.find('.excont').addClass('opacity-hide');
		$this.find('.toggle-expand .minus').addClass('opacity-hide');
		$this.find('.toggle-expand .plus').removeClass('opacity-hide');
		setTimeout(function() { 
			$this.find('.expand-content').removeClass('expand-visible');
		},400);
	}
	if(!($this.find('.expand-content').hasClass('expand-visible'))) {
		$this.find('.expand-content').addClass('expand-visible');
		$this.find('.toggle-expand .minus').removeClass('opacity-hide');
		$this.find('.toggle-expand .plus').addClass('opacity-hide');
		setTimeout(function() { 
			$this.find('.excont').removeClass('opacity-hide');
		},800);
	}
	return false;
});
/***** Service,Team toggle window end*****/

/***** Style Switcher start*****/
$(document).on( 'click', "#app_customizer a", function (e) {
	e.preventDefault();
	$('#app_customizer').toggleClass('open-customizer');
	return false;
});	
$(document).on( 'click', ".light-dark-wrap span", function (e) {
	e.preventDefault();
	var target = $('body');
	if(this.id == 'light_bg'){
		$('#dark_bg').removeClass('active-bg');
		$(this).addClass('active-bg');
		target.removeClass('dark-theme').addClass('light-theme');
	}	
		else if(this.id == 'dark_bg') {
			$('#light_bg').removeClass('active-bg');
			$(this).addClass('active-bg');
			 target.removeClass('light-theme').addClass('dark-theme');
		} 
	return false;
});

$(document).on( 'click', ".colors span", function (e) {
	e.preventDefault();
	var target = $('body');
	if(this.id == 'pink_pick')
		target.removeClass('blue-color green-color orange-color').addClass('pink-color');
		else if(this.id == 'blue_pick')
			target.removeClass('pink-color green-color orange-color').addClass('blue-color');
			else if(this.id == 'green_pick')
				target.removeClass('blue-color pink-color orange-color').addClass('green-color');
				else if (this.id == 'orange_pick')
					target.removeClass('blue-color green-color pink-color').addClass('orange-color');
	return false;
});

/***** Style Switcher end*****/ 

/***** LightGallery init start*****/	
$('#portfolio').lightGallery({  showThumbByDefault: false,hash: false});
$('#video_player').lightGallery({  showThumbByDefault: false,hash: false,zoom: false,counter:false});
/***** LightGallery init end*****/			

/***** Rotate Portfolio init start*****/	
$('#rot_slider').rotateSlider({});
/***** Rotate Portfolio init end*****/ 

/***** Placehoder ie9 start*****/
$('input[type=text], textarea').placeholder();
/***** Placehoder ie9 end*****/



