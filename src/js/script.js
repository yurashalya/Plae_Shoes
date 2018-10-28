console.log('script');


jQuery(function($) {

  // settings
  var $slider = $('.js-slider');
  var $slide = '.c__slide';
  var $transition_time = 1000;
  var $time_between_slides = 5000;

  function slides() {
    return $slider.find($slide);
  }

  slides().fadeOut();

  // set active classes
  slides().first().addClass('js-active');
  slides().first().fadeIn($transition_time);

  // auto scroll
$interval = setInterval(
  function() {
    var $i = $slider.find($slide + '.js-active').index();

    slides().eq($i).removeClass('js-active');
    slides().eq($i).fadeOut($transition_time);

    if (slides().length == $i + 1) $i = -1;

    slides().eq($i + 1).fadeIn($transition_time);
    slides().eq($i + 1).addClass('js-active');
  }, $time_between_slides
);

  $(".c-arrow__right").click(function() {
    var $i = $slider.find($slide + '.js-active').index();

    slides().eq($i).removeClass('js-active');
    slides().eq($i).fadeOut($transition_time);

    if (slides().length == $i + 1) $i = -1;

    slides().eq($i + 1).fadeIn($transition_time);
    slides().eq($i + 1).addClass('js-active');

    clearInterval($interval);
  });

  $(".c-arrow__left").click(function() {
    var $i = $slider.find($slide + '.js-active').index();

    slides().eq($i).removeClass('js-active');
    slides().eq($i).fadeOut($transition_time);

    if (slides().length == $i + 1) $i = -1;

    slides().eq($i - 1).fadeIn($transition_time);
    slides().eq($i - 1).addClass('js-active');

    clearInterval($interval)
  });

});