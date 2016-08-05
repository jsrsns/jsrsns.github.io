$(document).ready(function() {
  
/* Navigation */

var link = $('#nav > li'),        // 0. work 1. about me 3. blog
    pages = $('#content > div'),  // 0. work 1. about me 3. (...)
    close = $('.close');
    
var wide = 'calc(100vh - 170px)',
    mobile = '100vh',
    width = $(window).width();
    
console.log(width);

if (width <= '755') {
  var frame = mobile;
} else {
  var frame = wide;
}

var nav = function() {
  var x = $(this).index();
  if (x === 3) {
    //
  } else {
    pages.filter(function(index) {
      return index !== x;
    })
    .fadeOut();
    pages.filter(function(index) {
      return index === x;
    })
    .fadeIn();
  }
  if (x < 2) {
    setTimeout(function() {
      $('iframe').css('height', '0px');
    }, 300);
  } else {
    $('iframe').css('height', frame);
  }
};
link.on('click', nav);
var fade = function() {
  pages.fadeout();
  setTimeout(function() {
    $('iframe').css('height', '0px');
  }, 300);
};
close.on('click', fade);
  
/* Random background image */
var images = ['/images/Beam.svg', '/images/Boxes.svg', '/images/Corner.svg', '/images/Files.svg', '/images/Flag.svg', '/images/Floor.svg', '/images/Folds.svg', '/images/Ladder.svg', '/images/Pillar.svg', '/images/Stairs.svg', '/images/Wall.svg'];

var changeBG = function() {
  var bgStart = images[Math.floor(Math.random() * images.length)];
  $(this).css('background-image', 'url(' + bgStart + ')');
};
var el = $('#top-left, #top-right, #bottom-left, #bottom-right');
$.each(el, changeBG);
el.on('mouseenter', changeBG);
});

/* Joes Roosens - jsrsns.be */
