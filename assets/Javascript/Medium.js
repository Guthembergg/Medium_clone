window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 310 ||
    document.documentElement.scrollTop > 310
  ) {
    document.getElementById("started").style.backgroundColor = "#1a8917";
    document.getElementById("nav").style.backgroundColor = "rgb(255,255,255";
  } else {
    document.getElementById("started").style.backgroundColor = "rgb(0,0,0)";
    document.getElementById("nav").style.backgroundColor = "#ffc017";
  }
}
