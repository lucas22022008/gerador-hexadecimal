let colorInput = document.querySelector("#color-select");
let res = document.querySelector("#hex");
const titulo = document.querySelector(".titulo");

colorInput.addEventListener("input", () => {
    let color = colorInput.value;
    res.value = color;
    titulo.style.color = `${color}`;
})