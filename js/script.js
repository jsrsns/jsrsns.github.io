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
  pages.fadeOut();
  setTimeout(function() {
    $('iframe').css('height', '0px');
  }, 300);
};
close.on('click', fade);
  
/* Random background image */
var images = ['../img/Beam.svg', '../img/Boxes.svg', '../img/Corner.svg', '../img/Files.svg', '../img/Flag.svg', '../img/Floor.svg', '../img/Folds.svg', '../img/Ladder.svg', '../img/Pillar.svg', '../img/Stairs.svg', '../img/Wall.svg'];

var changeBG = function() {
  var bgStart = images[Math.floor(Math.random() * images.length)];
  $(this).css('background-image', 'url(' + bgStart + ')');
};
var el = $('#top-left, #top-right, #bottom-left, #bottom-right');
$.each(el, changeBG);
el.on('mouseenter', changeBG);

/* Random logo on mobile */
var images = ['../img/Beam.svg', '../img/Boxes.svg', '../img/Corner.svg', '../img/Files.svg', '../img/Flag.svg', '../img/Floor.svg', '../img/Folds.svg', '../img/Ladder.svg', '../img/Pillar.svg', '../img/Stairs.svg', '../img/Wall.svg'];

var RandomLogo = function () {
  var randOlogo = images[Math.floor(Math.random() * images.length)];
  $('.random').attr('src',randOlogo);
}
RandomLogo();
});

/* Joes Roosens - jsrsns.be */
