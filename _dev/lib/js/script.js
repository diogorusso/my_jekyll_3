$(document).ready(function(){
  		$(window).resize(function(){
			    var footerHeight = $('.footer').outerHeight();
			    var stickFooterPush = $('.push').height(footerHeight);
		
    			$('.wrapper').css({'marginBottom':'-' + footerHeight + 'px'});
		    });
		
    		$(window).resize();
	    });

var menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', function (e) {
    menuButton.classList.toggle('is-active');
    e.preventDefault();
});


	
jQuery(document).on("scroll",function(){
  if($(document).scrollTop()>100){ //scroll size
      $(".anim-menu").addClass("undocked");
  } else{
      $(".anim-menu").removeClass("undocked");
  }
});


jQuery(".main-container").on("scroll",function(){
  if($(".main-container").scrollTop()>100){ //scroll size
      $(".anim-menu").addClass("undocked");
  } else{
      $(".anim-menu").removeClass("undocked");
  }
});
 //CONTENT PRELOADER

$(window).load(function() { // makes sure the whole site is loaded
        $('.preloader').fadeOut(); // will first fade out the loading animation
        $('.overlay').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'})
});



// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-48
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

jQuery(document).ready(function() {
  var offset = 220;
  var duration = 500;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });
});






var heroBg = $('.hero-post');
    heroTitle = $('.hero-post-box');
    //when scrolltop reaches 35px then opacity of divs is 1 - 35/35 = 0
    limitTitle = 80;
    limitBg = 80;  

$(window).on('scroll', function() { 
  
  var st = $(this).scrollTop();

  if (st <= limitBg) { 
    heroBg.css({ 'opacity' : (0.2 + st/limitBg) });
  }

  if (st <= limitTitle) { 
    heroTitle.css({ 'opacity' : (1 - st/limitTitle) });
  }
  // make sure opacity goes to 0 and back

  if (st >= limitTitle) { 
    heroTitle.css({ 'opacity' : (1 - st/limitTitle) });
  }

});

//autohor: Gregory Schier http://codepen.io/gschier/pen/jkivt


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
