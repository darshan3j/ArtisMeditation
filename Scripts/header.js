
window.onscroll = function() {myFunction()};

function myFunction() {
    var g = document.getElementById("grid1");
  if (document.documentElement.scrollTop > 80) {
    g.style.transform = "scale(0.8,0.8)";
    g.style.transitionDuration = "0.5s"
    console.log("Scrolled");
  }
  else {
    g.style.transform = "scale(1,1)";
    console.log("Scrolled up");
  }
}