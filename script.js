const colorBlocks = document.getElementsByClassName("color-block");
const colorGuess = document.getElementById("rgb-color");
const status = document.getElementById("status");

let colors = ["", "", "", "", "", ""];
let guess = "";
let guessIdx;

function generateRandomColor() {
  const uniqueColors = new Set();
  for (let i = 0; i < 6; i++) {
    let color;

    do {
      let red = getRandomNum();
      let grn = getRandomNum();
      let blu = getRandomNum();
      color = `RGB(${red}, ${grn}, ${blu})`;
    } while (uniqueColors.has(color));

    uniqueColors.add(color);
    colors[i] = color;
    colorBlocks[i].style.backgroundColor = color;
  }
  getGuess();
}

function getRandomNum() {
  return Math.floor(Math.random() * 256);
}

function getGuess() {
  let idx = Math.floor(Math.random() * 6);
  guess = colors[idx];
  guessIdx = idx;
  colorGuess.textContent = guess;
}

function hideBlock(idx) {
  colorBlocks[idx].style.display = "none";
}

function clickBlock(event) {
  let clickedIdx = Array.from(colorBlocks).indexOf(event.target);
  if (clickedIdx !== guessIdx) {
    status.innerText = "Try Again!";
    hideBlock(clickedIdx);
  } else {
    correctGuess();
  }
}

function correctGuess() {
  status.innerText = "Correct";
  for (let i = 0; i < colorBlocks.length; i++) {
    if (colorBlocks[i].style.display !== "none") {
      colorBlocks[i].style.backgroundColor = guess;
    }
  }
}

function createBlockListener() {
  for (let i = 0; i < colorBlocks.length; i++) {
    colorBlocks[i].addEventListener('click', clickBlock);
  }
}

window.addEventListener('load', generateRandomColor);
createBlockListener();
