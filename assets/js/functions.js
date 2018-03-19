$(function(){
  clickhref();
  wowjs();
  fullPage();
});



function fullPage(){
  if($('body').is('.index-page')) {
     $('#fullpage').fullpage({
       //Navigation
   		menu: '#menu',
   		lockAnchors: false,
   		// anchors:['firstPage', 'secondPage'],
   		navigation: true,
   		navigationPosition: 'right',
   		// navigationTooltips: ['firstSlide', 'secondSlide'],
   		showActiveTooltip: false,
   		slidesNavigation: false,
   		slidesNavPosition: 'bottom',

   		//Scrolling
   		css3: true,
   		scrollingSpeed: 700,
   		autoScrolling: true,
   		fitToSection: true,
   		fitToSectionDelay: 1000,
   		scrollBar: true,
   		easing: 'easeInOutCubic',
   		easingcss3: 'ease',
   		loopBottom: false,
   		loopTop: false,
   		loopHorizontal: true,
   		continuousVertical: false,
   		continuousHorizontal: false,
   		scrollHorizontally: false,
   		interlockedSlides: false,
   		dragAndMove: false,
   		offsetSections: false,
   		resetSliders: false,
   		fadingEffect: false,
   		normalScrollElements: '#element1, .element2',
   		scrollOverflow: false,
   		scrollOverflowReset: false,
   		scrollOverflowOptions: null,
   		touchSensitivity: 15,
   		normalScrollElementTouchThreshold: 5,
   		bigSectionsDestination: null,

   		//Accessibility
   		keyboardScrolling: true,
   		animateAnchor: true,
   		recordHistory: true,

   		//Design
   		controlArrows: true,
   		verticalCentered: true,
   		sectionsColor : ['#ccc', '#fff'],
   		paddingTop: '3em',
   		paddingBottom: '10px',
   		fixedElements: '#header, .footer',
   		responsiveWidth: 0,
   		responsiveHeight: 0,
   		responsiveSlides: false,
   		parallax: false,
   		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

   		//Custom selectors
   		sectionSelector: '.section',
   		slideSelector: '.slide',

   		lazyLoading: true,

   		//events
   		onLeave: function(index, nextIndex, direction){},
   		afterLoad: function(anchorLink, index){},
   		afterRender: function(){},
   		afterResize: function(){},
   		afterResponsive: function(isResponsive){},
   		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
   		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
   	});
   }
};




$(document).ready(function(){
  $('select').niceSelect();
});


function clickhref(){
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
}

function wowjs(){
  new WOW().init();
}
