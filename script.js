const colorBlocks = document.getElementsByClassName("color-block");
const colorGuess = document.getElementById("rgb-color");
let colors = ["", "", "", "", "", ""];
let guess = "";

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
  colorGuess.textContent = guess;
}

window.addEventListener('load', generateRandomColor);
