function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const imageSources = [
  "/assets/adele21.jpg",
  "/assets/bday.jpg",
  "/assets/college dropout.jpg",
  "/assets/culture.jpg",
  "/assets/ds2.jpg",
  "/assets/mbdtf.jpg",
  "assets/nwts.jpg",
  "assets/sheabutterbaby.jpg",

  // Add more image paths as needed
];

// Duplicate image sources to pair them up for the game
const images = imageSources.concat(imageSources);

var shuffledImages = images.sort(() => Math.random() - 0.5);

for (var i = 0; i < shuffledImages.length; i++) {
  let box = document.createElement("div");
  box.className = "item";

  // Create img elements instead of emojis
  let img = document.createElement("img");
  img.src = shuffledImages[i];
  img.classList.add("image-item");

  box.appendChild(img);

  box.onclick = function () {
    this.classList.add("boxOpen");
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        let openBoxes = document.querySelectorAll(".boxOpen");

        if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
          openBoxes.forEach((box) => {
            box.classList.add("boxMatch");
            box.classList.remove("boxOpen");
          });

          if (document.querySelectorAll(".boxMatch").length === images.length) {
            alert("Congratulations! You've matched all the images!");
          }
        } else {
          openBoxes.forEach((box) => {
            box.classList.remove("boxOpen");
          });
        }
      }
    }, 500);
  };

  document.querySelector(".game").appendChild(box);
}

document.querySelectorAll(".image-item").forEach((img) => {
  img.style.width = "100%";
  img.style.height = "100%";
});
