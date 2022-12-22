
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
  var x = document.getElementById('SectionName');
  if (x.style.display == 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
const open = document.getElementById("open");
const openLisa = document.getElementById("openLisa");
const openChristian = document.getElementById("openChristian");

const modal_container = document.getElementById("modal-container")
const modal_container_lisa = document.getElementById("modal-container-lisa")
const modal_container_christian = document.getElementById("modal-container-christian")

const close = document.getElementById("close")
const closeLisa = document.getElementById("closeLisa")
const closeChristian = document.getElementById("closeChristian")

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});
openLisa.addEventListener("click", () => {
  modal_container_lisa.classList.add("show");
});

openChristian.addEventListener("click", () => {
  modal_container_christian.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

closeLisa.addEventListener("click", () => {
  modal_container_lisa.classList.remove("show");
});

closeChristian.addEventListener("click", () => {
  modal_container_christian.classList.remove("show");
});