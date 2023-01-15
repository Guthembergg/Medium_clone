// when the window is scrolled past the hero section in the header opens my function to change the nav color and the get started button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 460) {
    document.getElementById("started").style.backgroundColor = "#1a8917";
    document.getElementById("nav").style.backgroundColor = "rgb(255,255,255";
  } else {
    document.getElementById("started").style.backgroundColor = "rgb(0,0,0)";
    document.getElementById("nav").style.backgroundColor = "#ffc017";
  }
}

let arr = document.getElementsByTagName("path");
let mElements = Array.from(arr);

setInterval(() => {
  let lengthTime = mElements.length / 2;

  // Hide the chosen elements
  let num = Math.floor(Math.random() * lengthTime);
  mElements[num].style.opacity = "0";

  // Choose a random interval of time to wait
  let showInterval = Math.floor(Math.random() * 7000);

  setTimeout(() => {
    // Show the hidden elements again
    let num2 = Math.floor(Math.random() * lengthTime);
    mElements[num2].style.opacity = "1";
  }, showInterval);
}, 80);
