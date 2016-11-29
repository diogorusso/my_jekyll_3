//foundation init
  $(document).foundation();

/* acessar link accordion Foundation --->  

setTimeout(function() {

  var hash = window.location.hash;
  if (hash != ''){

    $('a[href="'+ hash +'"]').trigger('click.fndtn.accordion');

    $('html, body').animate({
      scrollTop: $('dl.accordion').offset().top
    });
  }
}, 600);*/