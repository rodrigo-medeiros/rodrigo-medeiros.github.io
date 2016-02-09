$("document").ready(function() {
  handleShowHideSidebar();
  handleSideBarClick();
});

function handleShowHideSidebar () {
  var $menuButton = $("#menu-button i"),
      show = "animated slideInLeft",
      hide = "animated slideOutLeft";

  $menuButton.on("click", function () {
    var $sideBar = $("#sidebar");

    if ($sideBar.hasClass("slideInLeft")) {
      $sideBar
        .removeClass(show)
        .addClass(hide)
        .removeClass("hidden");
    } else {
      $sideBar
        .removeClass(hide)
        .addClass(show)
        .removeClass("hidden");
    }
  });
}

function handleSideBarClick () {
  $("#sidebar li a").on("click", function () {
    var href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(href).offset().top
    }, 600);
    $("#sidebar")
      .removeClass("animated slideInLeft")
      .addClass("animated slideOutLeft");
    return false;
  });
}
