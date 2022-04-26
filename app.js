let gridSize = 16;
const container = document.querySelector(".container");

for (let i = 0; i < (gridSize**2); i++){
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    gridBox.style.flexBasis = `calc(100% / ${gridSize})`;
    container.appendChild(gridBox);
}