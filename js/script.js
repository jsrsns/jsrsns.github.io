$(document).ready(function() {
/* Random background image */
var bgImageArray = ['/images/Stairs.svg','/images/Ladder.svg','/images/Boxes.svg','/images/Bricks.svg','/images/Flag.svg','/images/Beam.svg','/images/Wall.svg','/images/Floor.svg'],
  selectBG = bgImageArray[Math.floor(Math.random() * bgImageArray.length)];
  

$('#top-left,#top-right,#bottom-left,#bottom-right').css('background-image', 'url(' + selectBG + ')')
});

/* Joes Roosens - jsrsns.be */
