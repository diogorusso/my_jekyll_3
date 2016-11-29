$(function(){
var $grid= $('.grid').isotope({
    itemSelector: '.grid li',
    percentPosition: true,
    //isAnimated: false,
    transitionDuration:0,
    //layoutMode: 'fitRows',
    isInitLayout: true,
    });

    $grid.imagesLoaded().always(function(){
        var elements=".grid-item";
        var $elements=$(elements);
        $grid.append($elements);
        $grid.isotope();
    });

    // filter .Creative_Direction items
    $grid.isotope({ filter: '.Creative_Direction' });

    // filter .Experience items
    $grid.isotope({ filter: '.Experience' });

    // filter .Experience items
    $grid.isotope({ filter: '.Design' });

    // show all items
    $grid.isotope({ filter: '*' });

    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

});