const gridContainer = document.querySelector(".grid-container");
const selectDrop = document.querySelector("select");
const resetButton = document.querySelector(".reset-button");

// let sizeBlock = (750-16*2)/16;
let gridSize = 16;
let blockSize = 750/gridSize + "px";

selectDrop.addEventListener("change", (event) => {
    gridSize = event.target.value;
    blockSize = 750/gridSize + "px";
    removeGrid();
    drawGrid();
});

resetButton.addEventListener("click", (event) => {
    gridContainer.childNodes.forEach(row => {
        row.childNodes.forEach(element => {
            element.style.background = "white";
        });
        
    });
});

function removeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function drawGrid() {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j = 0; j < gridSize; j++) {
            const divElement = document.createElement("div");
            divElement.setAttribute("class", "div-element");
            divElement.style.width = blockSize;
            divElement.style.height = blockSize;

            divElement.addEventListener("mouseenter", (event) => {
                if (!event.ctrlKey) {
                    divElement.style.background = "red";
                }
            });

            // divElement.setAttribute("style", "width: calc(718px/16); height: calc(718px/16);");
            row.appendChild(divElement);
        }
        gridContainer.appendChild(row);
    }
}

drawGrid();