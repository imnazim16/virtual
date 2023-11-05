$(function () {
  $("header")
    .mouseover(function () {
      $(this).addClass("headBg");
    })
    .mouseout(function () {
      $(this).removeClass("headBg");
    });
  $(".m-level-1 li").mouseover(function () {
    $(".m-level-1 li").removeClass("active");
    $(this).addClass("active");
  });
  document.getElementById("hvideo").setAttribute("autoplay", "autoplay");
  setTimeout(function(){
    $('.loader-box').fadeOut()
  }, 3000)
  const options = {
    root: null,
    rootMargin: "15px",
    threshold: 0.5,
  };

  var image = document.getElementsByClassName("paroller");
  new simpleParallax(image, {
    maxTransition: 60,
  });
  var image1 = document.getElementsByClassName("paroller1");
  new simpleParallax(image1, {
    maxTransition: 100,
    orientation: "down",
    scale: 1.5,
  });
  $(".acnav__label").click(function () {
    var label = $(this);
    var parent = label.parent(".has-children");
    var list = label.siblings(".acnav__list");

    if (parent.hasClass("is-open")) {
      list.slideUp("fast");
      parent.removeClass("is-open");
    } else {
      list.slideDown("fast");
      parent.addClass("is-open");
    }
  });
  $(".mb-menu").click(function () {
    $(".mb-menu-wrap").addClass("openMenu");
  });
  $(".mb-close").click(function () {
    $(".mb-menu-wrap").removeClass("openMenu");
  });
  $(".ckesBtn").click(function (e) {
    e.preventDefault();
    $(".cookies-strip").fadeOut();
  });
  $(".arrow").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
      scrollTop: position,
    });
  });
});
