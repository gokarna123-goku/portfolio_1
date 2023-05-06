//

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  var scrollY = window.scrollY;

  if (scrollY >= 50) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});


// Toggle
$(document).ready(function () {
  $("#toggleIcon").click(function () {
    $("ul").toggleClass("showNavbar");
  });
});


// End
