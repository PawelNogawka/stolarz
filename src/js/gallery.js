window.addEventListener("DOMContentLoaded",function(){
  const closeBtn = document.querySelector(".projects__btn");
const imgIcon = document.querySelectorAll(".projects__icon-magn");
const images = [...document.querySelectorAll(".gallery__project img")];
let popup = document.querySelector(".projects__popup");
let popupImg = document.querySelector(".projects__popup-img");
const arrows = document.querySelectorAll(".projects__arrow");

const hiddenImgs = ["./dist/images/projects/drewniany-mostek-ogrodowy.jpg","./dist/images/projects/taras-domowy-zadaszony.jpg","./dist/images/projects/basen-ogrodowy.jpg"]
const hiddenAlts = ["drewniany mostek ogrodowy","taras zadaszony z drewna", "basen domowy wykonay z drewna"]


let altArray = "";
let srcArray = "";
let currentIndex = 0;

imgIcon.forEach(function (icon) {
  icon.addEventListener("click", function (e) {
    let image = e.target.parentElement.previousElementSibling;
    let imageSrc = image.getAttribute("src");
    let imageAlt = image.getAttribute("alt");

    showPopup(imageSrc, imageAlt);
  });
});

images.forEach(function (image) {
  image.onclick = () => {
    let src = image.getAttribute("src");
    let alt = image.getAttribute("alt");
    showPopup(src, alt);
  };
});

console.log(images)

function showPopup(src, alt) {
  popup.style.display = "block";
  popupImg.setAttribute("src", src);
  popupImg.alt = alt;
  getSources();
}

closeBtn.onclick = () => {
  document.querySelector(".projects__popup").style.display = "none";
};

arrows.forEach((arrow) => {
  arrow.addEventListener("click", changeIndex);
});

function getSources() {
  let sources = "";
  let alts = ""
  images.forEach((image) => {
    sources = sources + image.getAttribute("src") + " ";
    alts = alts + image.alt + "+"
  });
  altArray = alts.split("+").slice(0,50)
  srcArray = sources.split(" ").slice(0, 50);

  srcArray = srcArray.concat(hiddenImgs)
  altArray = altArray.concat(hiddenAlts)
  getIndex();
}

function getIndex() {
  currentIndex = srcArray.indexOf(popupImg.getAttribute("src"));
  checkIndex();
}

function checkIndex() {
  if (currentIndex == 0) {
    arrows[0].style.display = "none";
  } else {
    arrows[0].style.display = "block";
  }

  if (currentIndex == srcArray.length - 1) {
    arrows[1].style.display = "none";
  } else {
    arrows[1].style.display = "block";
  }
}

function changeIndex(e) {
  if (e.target.classList.contains("projects__arrow--left")) {
    currentIndex--;
  } else {
    currentIndex++;
  }

  changeImg();
}
function changeImg() {
  checkIndex();
  popupImg.setAttribute("src", srcArray[currentIndex]);
  popupImg.alt = altArray[currentIndex]
}

})