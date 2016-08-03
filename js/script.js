$(document).ready(function() {
/* Random background image */
var colors = ['#e6e6fa', '#f0e68c', '#6495ed', '#f8f8fa', '#0000cd', '#20b2aa', '#800000', '#ff4500'];

var changeBG = function() {
  var bgStart = colors[Math.floor(Math.random() * colors.length)];
  $(this).css('background-color', bgStart);
};
var el = $('#top-left, #top-right, #bottom-left, #bottom-right');
$.each(el, changeBG);
el.on('mouseenter', changeBG);
});

/* Joes Roosens - jsrsns.be */
