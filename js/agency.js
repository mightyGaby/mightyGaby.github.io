
var soundOn;

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//changes class on font-awesome icons based on page size
window.onload = function(){
  soundOn = false;
  iconSize();
  svg = d3.select('#data-viz')
          .append('svg')
            .attr('width', '100%')
            .attr('height', '500px');

  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  loadFile('audio/bensound-jazzcomedy.mp3');
  gainNode = audioContext.createGain();
  gainNode.gain.value = -1;

}

window.onresize = function(){
  iconSize();
}

function iconSize(){
  var width = $(window).width();
  console.log("window width: " + width);
  if (width < 768)
  {
    $(".timeline-image > span").removeClass();
    $(".timeline-image > span").addClass("fa-stack fa-lg");
  } else if (width <=992){
    $(".timeline-image > span").removeClass();
    $(".timeline-image > span").addClass("fa-stack fa-4x");
  } else {
    $(".timeline-image > span").removeClass();
    $(".timeline-image > span").addClass("fa-stack fa-5x");
  }
}

//animates sound icon for d3

// $("#soundlevel").hover( function() {
//     if( $( this ).hasClass("fa-volume-off") ){
//       console.log("off!");
//       $( this ).removeClass("fa-volume-off");
//       $( this ).addClass("fa-volume-up");
//     } else if( $( this ).hasClass("fa-volume-up") ){
//       console.log("on!");
//       $( this ).removeClass("fa-volume-up");
//       $( this ).addClass("fa-volume-off");
//     }
//   });

  $("#soundlevel").click( function() {
      if( !soundOn ){
        console.log("off!");
        if( $( this ).hasClass("fa-volume-off") ){
          console.log("off!");
          $( this ).removeClass("fa-volume-off");
          $( this ).addClass("fa-volume-up");
        } else if( $( this ).hasClass("fa-volume-up") ){
          console.log("on!");
          $( this ).removeClass("fa-volume-up");
          $( this ).addClass("fa-volume-off");
        }
        soundOn = true;
        gainNode.gain.value = 1;

      } else if( soundOn ){
        console.log("on!");
        if( $( this ).hasClass("fa-volume-off") ){
          console.log("off!");
          $( this ).removeClass("fa-volume-off");
          $( this ).addClass("fa-volume-up");
        } else if( $( this ).hasClass("fa-volume-up") ){
          console.log("on!");
          $( this ).removeClass("fa-volume-up");
          $( this ).addClass("fa-volume-off");
        }
        soundOn = false;
        gainNode.gain.value = -1;
      }
    });
