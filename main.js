// execute myFunction when user scroll
window.onscroll = function() {goScroll()};

// navbar
var topnav = document.getElementById("topnav");

// get the offset position of the navbar
var sticky = topnav.offsetTop;

// add the sticky class to the navbar when you reach its scroll position. r
// remove "sticky" when you leave the scroll position
function goScroll() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky")
  } else {
    topnav.classList.remove("sticky");
  }
}