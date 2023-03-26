const list = document.querySelectorAll(".key-display");
const display = document.querySelector(".result");
const calculate = document.querySelector(".calculate");
const allClear = document.querySelector(".all-clear");
const clearLast = document.querySelector(".clear-last");
function backSpace() {
  let text = display.innerHTML;
  if (text.length === 1) {
    display.innerHTML = 0;
  } else {
    display.innerHTML = text.substring(0, text.length - 1);
  }
}
clearLast.addEventListener("click", backSpace);
function clearDisplay() {
  display.innerHTML = 0;
}
allClear.addEventListener("click", clearDisplay);
function calculateDisplay() {
  let result = display.innerHTML;
  display.innerHTML = eval(result);
}
calculate.addEventListener("click", calculateDisplay);
function showDisplay(event) {
  let x = event.target.innerText;
  if (display.innerHTML == 0) {
    return (display.innerHTML = x);
  }
  return (display.innerHTML += x);
}
list.forEach((key) => {
  key.addEventListener("click", showDisplay);
});
