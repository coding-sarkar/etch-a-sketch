let gridSize = 16;
const container = document.querySelector(".container");
const resetButton = document.querySelector("button");

resetButton.addEventListener("click", gridReset);

function gridReset() {
    const gridBoxes = Array.from(container.querySelectorAll(".grid-box"));
    gridBoxes.forEach((box) => {
        box.style.backgroundColor = "white";
    });
}

function mouseHover(e) {
    e.target.style.backgroundColor = "red";
}

for (let i = 0; i < (gridSize**2); i++){
    const gridBox = document.createElement("div");
    
    gridBox.classList.add("grid-box");
    
    // divides total container width by number of rows to get evenly spaced grid boxes
    gridBox.style.flexBasis = `calc(100% / ${gridSize})`;

    gridBox.addEventListener("mouseover", mouseHover, {once: true});

    container.appendChild(gridBox);
}