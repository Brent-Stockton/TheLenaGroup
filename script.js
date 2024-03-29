//team Javascript title for cards
window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

//bio button Show/Hide
function ShowAndHide() {
  var x = document.getElementById("SectionName");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.getElementById("m-button").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
  console.log("button clicked...");
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});

document.getElementById("k-button").addEventListener("click", function () {
  document.querySelector(".bg-modal-ken").style.display = "flex";
});

document.querySelector(".k-close").addEventListener("click", function () {
  document.querySelector(".bg-modal-ken").style.display = "none";
});

document.getElementById("l-button").addEventListener("click", function () {
  document.querySelector(".bg-modal-ken").style.display = "flex";
});

const carouselWrapper = document.querySelector(".review-carousel");

let isDown = false;
let startX;
let scrollLeft;

carouselWrapper.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - carouselWrapper.offsetLeft;
  scrollLeft = carouselWrapper.scrollLeft;
});

carouselWrapper.addEventListener("mouseleave", () => {
  isDown = false;
});

carouselWrapper.addEventListener("mouseup", () => {
  isDown = false;
});

carouselWrapper.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carouselWrapper.offsetLeft;
  const walk = x - startX;
  carouselWrapper.scrollLeft = scrollLeft - walk;
});
