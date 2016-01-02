$("document").ready(function() {

  activateScrollSpy();
  scrollNav();

});

function scrollNav() {

  $("#main-navbar a").click(function() {
    //Toggle Class
    $(".active").removeClass("active");
    $(this).closest("li").addClass("active");
    var theClass = $(this).attr("class");
    $("." + theClass).parent("li").addClass("active");
    //Animate
    $("html, body").stop().animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 500);

    return false;
  });
  $(".scrollTop a").scrollTop();

}

function activateScrollSpy() {

  $("body").scrollspy({
    target: "#main-navbar",
    offset: 50
  });

}