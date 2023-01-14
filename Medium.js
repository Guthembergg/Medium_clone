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

//let svg = document.querySelectorAll("svg");
let arr = document.getElementsByTagName("path");
var mElements = Array.from(arr);

setInterval(() => {
  // Choose a random number of M elements to hide
  let numToHide = Math.floor(Math.random() * mElements.length);

  // Hide the chosen elements
  for (let i = 1; i < numToHide; i++) {
    let num = Math.floor(Math.random() * mElements.length);
    mElements[num].style.opacity = "0";
  }

  // Choose a random interval of time to wait before showing the elements again
  let showInterval = Math.floor(Math.random() * 5000);

  setTimeout(() => {
    // Show the hidden elements again
    for (let i = 1; i < numToHide; i++) {
      let num2 = Math.floor(Math.random() * mElements.length);
      mElements[num2].style.opacity = "1";
    }
  }, showInterval);
}, 5000);

// let firstG = document.getElementById("id_G");
// var ArrG = Array.from(firstG);
// ArrG.aria_label = "M M";
console.log(mElements);
