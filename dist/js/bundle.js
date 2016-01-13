$("document").ready(function() {
  var $menuButton = $("#menu-button i");

  $menuButton.on("click", function () {
    var $sideBar = $("#sidebar");

    if ($sideBar.hasClass("slideInLeft")) {
      $sideBar
        .removeClass("animated slideInLeft")
        .addClass("animated slideOutLeft")
        .removeClass("hidden");
    } else {
      $sideBar
        .removeClass("animated slideOutLeft")
        .addClass("animated slideInLeft")
        .removeClass("hidden");
    }
  });
});
