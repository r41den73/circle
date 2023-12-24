let circle = document.getElementById("circle");
let resetButton = document.getElementById("resetButton");
let timeTaken = document.getElementById("timeTaken");
let startTime;

circle.addEventListener("click", function (event) {
  let endTime = new Date().getTime();
  let timeDifference = endTime - startTime;
  timeTaken.textContent = "Прошло " + timeDifference + " мс";

  let newLeft = Math.random() * window.innerWidth;
  let newTop = Math.random() * window.innerHeight;
  circle.style.left = newLeft + "px";
  circle.style.top = newTop + "px";
});

resetButton.addEventListener("click", function (event) {
  timeTaken.textContent = "";
});

document.addEventListener("DOMContentLoaded", function (event) {
  startTime = new Date().getTime();
});
let circles = document.getElementById("circle");
let counter = document.getElementById("counter");
let resetButtons = document.getElementById("resetButton");
let clickCount = 0;

circle.addEventListener("click", function () {
  clickCount++;
  counter.innerText = clickCount;
  let maxX = window.innerWidth - circles.clientWidth;
  let maxY = window.innerHeight - circles.clientHeight;
  let newX = Math.floor(Math.random() * maxX);
  let newY = Math.floor(Math.random() * maxY);
  circle.style.left = newX + "px";
  circle.style.top = newY + "px";
});

resetButtons.addEventListener("click", function () {
  clickCount = 0;
  counter.innerText = "0";
});