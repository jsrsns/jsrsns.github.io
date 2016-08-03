$(document).ready(function() {
/* Random background image */
var bgImageArray = ['/images/Stairs.svg','/images/Ladder.svg','/images/Boxes.svg','/images/Bricks.svg','/images/Flag.svg','/images/Beam.svg','/images/Wall.svg','/images/Floor.svg'],
  selectBG1 = bgImageArray[Math.floor(Math.random() * bgImageArray.length)];
  selectBG2 = bgImageArray[Math.floor(Math.random() * bgImageArray.length)];
  selectBG3 = bgImageArray[Math.floor(Math.random() * bgImageArray.length)];
  selectBG4 = bgImageArray[Math.floor(Math.random() * bgImageArray.length)];
  

$('#top-left').css('background-image', 'url(' + selectBG1 + ')');
$('#top-right').css('background-image', 'url(' + selectBG2 + ')')
$('#bottom-left').css('background-image', 'url(' + selectBG3 + ')')
$('#bottom-right').css('background-image', 'url(' + selectBG4 + ')')
});

/* Joes Roosens - jsrsns.be */
