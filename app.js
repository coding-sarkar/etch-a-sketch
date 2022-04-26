const container = document.querySelector(".container");
const resetButton = document.querySelector("button");
resetButton.addEventListener("click", userInput);

start();

function start(gridSize = 16) {
    for (let i = 0; i < (gridSize**2); i++){
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        // divides total container width by number of rows to get evenly spaced grid boxes
        gridBox.style.flexBasis = `calc(100% / ${gridSize})`;
        gridBox.addEventListener("mouseover", mouseHover);
        container.appendChild(gridBox);
    }
}

function mouseHover(e) {
    let hue = Math.floor(Math.random() * 360);
    let saturation = Math.floor(Math.random() * 101);
    let lightness = Math.floor(Math.random() * 101);

    e.target.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function userInput() {
    let userInputGridSize
    container.textContent = "";
    while(true) {
        userInputGridSize = Number(prompt("Enter A Number [8 - 100]"));
        if (userInputGridSize > 100 || userInputGridSize < 8) {
            continue;
        } else {
            break;
        }
    }
    start(userInputGridSize);
}



