const loader = document.getElementById("loader");
const loader2 = document.getElementById("loader2");
const menuBarContainer = document.getElementById("menuBarContainer");
const songFormContainer = document.getElementById("songFormContainer");
const orderFormContainer = document.getElementById("orderFormContainer");

window.addEventListener("load", function () {
    load();
});

setTimeout(function load() {
    loader.classList.add("loader-hidden");
    loader2.classList.add("loader-hidden");
    menuBarContainer.classList.add("menuBarContainer-visible");
    songFormContainer.classList.add("songFormContainer-visible");
    orderFormContainer.classList.add("orderFormContainer-visible");
}, 800);

setTimeout(function load() {
    loader.style.display = "none";
    loader2.style.display = "none";
}, 1500);

