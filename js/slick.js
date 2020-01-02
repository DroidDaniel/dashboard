$(document).ready(function(){
  $('.js-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span class="gallery-arrow mod-prev"><img src="hotel_images/prev.png"/></span>',
    nextArrow: '<span class="gallery-arrow mod-next"><img src="hotel_images/next.png"/></span>'
  });
  
  $('.js-gallery').slickLightbox({
    src: 'src',
    itemSelector: '.js-gallery-popup img',
    background: 'rgba(0, 0, 0, .7)'
  });
});