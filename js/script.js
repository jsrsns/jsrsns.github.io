$(document).ready(function() {
/* Random background image */
var bgImageArray = ['/images/Stairs.svg','/images/Ladder.svg','/images/Boxes.svg','/images/Bricks.svg','/images/Flag.svg','/images/Beam.svg','/images/Wall.svg','/images/Floor.svg'],
  selectBG = bgImageArray[Math.floor(Math.random() * bgImageArray.length)];
  

$('body').css('background', 'url(' + selectBG + ')')
});

/* Joes Roosens - jsrsns.be */
