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
  });
  $('.button').click(function() {
    $("#walrus-showing").toggle('slow');
    $("#walrus-hidden").toggle('slow'); 
  });
  $('button#removebackground').click(function() {
    $('body').removeClass();
  });
  

  // Colors page
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("p#intro").click(function() {
    $("p#intro").toggleClass("outline");
  });

});