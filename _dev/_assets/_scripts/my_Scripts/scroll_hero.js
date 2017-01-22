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