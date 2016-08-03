$(document).ready(function() {
  
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
