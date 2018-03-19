$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  if( $('section.home-gallery ').offset().top - $(window).height() / 2 < wScroll  ){
    $('.span1').addClass('is-spaning');
    $('.span2').removeClass('is-spaning');
    $('.span3').removeClass('is-spaning');
    $('.span4').removeClass('is-spaning');
    $('a, i').removeClass('color');

  };


  if( $('section.home-shoes ').offset().top - $(window).height() / 2 < wScroll  ){
    $('.span2').addClass('is-spaning');
    $('.span1').removeClass('is-spaning');
    $('a, i').removeClass('color');

  };

  if( $('section.home-dress ').offset().top - $(window).height() / 11 < wScroll  ){
    $('.span3').addClass('is-spaning');
    $('.span2').removeClass('is-spaning');
    $('a, i').addClass('color');

  }

  if( $('section.home-footer ').offset().top - $(window).height() / 7 < wScroll  ){
    $('.span4').addClass('is-spaning');
    $('.span3').removeClass('is-spaning');
    $('a, i').removeClass('color');
  }
});
