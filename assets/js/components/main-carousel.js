const buttomRight = window.document.querySelector(".button-arrow.-right");
const buttomLeft = window.document.querySelector(".button-arrow.-left");
const elements = window.document.querySelector(".elements");
let pixels = 100;

buttomRight.addEventListener("click", function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
});

buttomLeft.addEventListener("click", function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
});
