const loader = document.getElementById("loader");
const menuBarContainer = document.getElementById("menuBarContainer");
const songFormContainer = document.getElementById("songFormContainer");
const orderFormContainer = document.getElementById("orderFormContainer");

window.addEventListener("load", function () {
    loader.classList.add("loader-hidden");
    menuBarContainer.classList.add("menuBarContainer-visible");
    songFormContainer.classList.add("songFormContainer-visible");
    orderFormContainer.classList.add("orderFormContainer-visible");
});