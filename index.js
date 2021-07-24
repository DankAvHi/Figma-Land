const headerImg = document.querySelector(".headerImg");
const navButton = document.querySelector(".navButton");
const navContent = document.querySelector(".navContent");
const navContentExpandBackground = document.querySelector(
    ".navContentExpandBackground"
);
const plashka = document.querySelector(".plashka");

function openNav() {
    navContent.classList.toggle("open");
    navContentExpandBackground.classList.toggle("open");
}

navButton.addEventListener("click", openNav);
navContentExpandBackground.addEventListener("click", openNav);

function resizeChange() {
    if (screen.width < 1040) {
        headerImg.src = "./assets/images/headerImgMin.png";
    } else {
        headerImg.src = "./assets/images/headerImg.png";
    }
}

function plD() {
    const pishe = setInterval(() => {
        plashka.style.opacity = plashka.style.opacity - 0.01;
        if (plashka.style.opacity < 0) {
            clearInterval(pishe);
        }
    }, 10);

    setTimeout(() => {
        plashka.style.display = "none";
    }, 1500);
}
window.onresize = function() {
    resizeChange();
};
window.onload = function() {
    resizeChange();
    plashka.style.opacity = 1;
    plD();

    console.log(plashka.style.opacity);
};