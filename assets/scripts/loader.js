const loader = document.getElementById("loader");
const menuBarContainer = document.getElementById("menuBarContainer");
window.addEventListener("load", function () {
    loader.classList.add("loader-hidden");
    menuBarContainer.classList.add("menuBarContainer-visible");
});