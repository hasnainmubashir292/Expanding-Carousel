const carousel = document.querySelector(".carousel");
const imagesArray = [
  "./images/img.jpg",
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img4.jpg",
  "./images/img5.jpg",
];
const change = function (e) {
  const allImages = document.querySelectorAll(".images");
  allImages.forEach((image) => {
    image.style.width = "50px";
  });

  const clickedElement = e.target;
  clickedElement.style.width = "100%";
};
for (let i = 0; i < imagesArray.length; i++) {
  const imageObject = document.createElement("div");
  imageObject.style.backgroundImage = `url(${imagesArray[i]})`;
  imageObject.style.backgroundSize = "cover"; // Ensure the image covers the div
  imageObject.setAttribute("id", `${1 + i}`);
  imageObject.addEventListener("click", change);
  imageObject.setAttribute("class", "images");
  carousel?.appendChild(imageObject);
}

const first = document.querySelector(".images");
first.style.width = "100%";
