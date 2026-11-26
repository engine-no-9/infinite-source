let timeUp = false;
let score = 0;
let imgs = document.querySelectorAll(".column");
let lastImage;

const btn = document.querySelector("button");

const arr = Array.from(imgs);
let arr1 = [];

function randomImage(images) {
  let i = Math.floor(Math.random() * images.length);
  const image = images[i];

  if (image === lastImage) {
    return randomImage(images);
  }

  lastImage = image;
  return image;
}

function peep() {
  const random = randomImage(arr); // node
  const index = arr.indexOf(random);

  setTimeout(() => {
    if (!timeUp) {
      let reveal = imgs[index];
      reveal.classList.remove("column_");
      document.getElementById("placehere").appendChild(reveal);

      peep();
    }

    if (timeUp) return;
  }, 200);
}

function startGame() {
  timeUp = false;
  peep();
  setTimeout(() => {
    timeUp = true;
  }, 10000);
}

btn.addEventListener("click", startGame);
