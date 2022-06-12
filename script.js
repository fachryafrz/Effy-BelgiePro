const body = document.querySelector("body");
const welcomeText = document.querySelector(".welcome-text");
const aboutHeader = document.querySelector(".about-header");
const aboutTxtRed = document.querySelector(".about-txt-red");
const aboutImg = document.querySelector(".about-img");
const aboutBarangText = document.querySelector(".about-barang-text h1");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 2) {
    body.classList.add("gantiBgBody");
    welcomeText.style.color = "rgb(206, 57, 82)";
    aboutHeader.style.color = "black";
    aboutTxtRed.style.color = "rgb(206, 57, 82)";
    aboutImg.style.filter = "none";
    aboutBarangText.style.color = "rgb(206, 57, 82)";
  } else {
    body.classList.remove("gantiBgBody");
    welcomeText.style.color = "ghostwhite";
    aboutHeader.style.color = "ghostwhite";
    aboutTxtRed.style.color = "ghostwhite";
    aboutImg.style.filter = "grayscale(100%)";
    aboutBarangText.style.color = "ghostwhite";
  }
});
