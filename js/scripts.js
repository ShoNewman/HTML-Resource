// HTML help page
$(document).ready(function() {
//   $("h1").click(function() {
//     alert("This is a heading.");
//   });

//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });

//   $("img").click(function() {
//     alert("This is an image.");
//   });


// walrus page
  $(".clickable").click(function() {
    $("#walrus-showing").toggle('slow');
    $("#walrus-hidden").toggle('slow');
    $("#hideImg").toggle();
    $("#showImg").toggle();
    $("img").slideOut('slow');
  })
  $('.button').click(function() {
    $("#walrus-showing").toggle('slow');
    $("#walrus-hidden").toggle('slow');
  })
  
});