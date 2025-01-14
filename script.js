const gridContainer = document.querySelector(".gridContainer");
const sizeButton = document.querySelector(".sizeButton");
const resetButton = document.querySelector(".resetButton");
const modeButton = document.querySelector(".modeButton");

const inkColor = "blue";

let gridDivs = document.querySelectorAll(".gridDiv");
let size = document.querySelector(".size");
let mode = document.querySelector(".mode");
let modeText = document.querySelector(".modeText");


function setNewSize() {
    const sNum = prompt("Please enter a new size (1-100):");
    let testNum = Number(sNum);

    if (!Number.isNaN(testNum)){
        console.log(`CORRECT input: ${testNum}`);
        if(sNum >= 1 && sNum <= 100){
            return sNum;
        } else {
            console.log(`ERROR: ${testNum} is out of range`);
            return setNewSize();
        }
    } else {
        console.log(`ERROR: ${testNum} is not a number`);
        return setNewSize();
    }
}


function addDrawing(e) {
    e.target.style.backgroundColor = inkColor;
}

function addOpacity(e) {
    //will only work on the color squares
    if (e.target.style.backgroundColor === 'blue'){
        if (e.target.style.opacity){
            e.target.style.opacity = e.target.style.opacity - 0.1;
        } else {
            e.target.style.opacity = 0.9;
        }
    }
}

function createGrid(gridTotal) {
    gridContainer.innerHTML = '';
    for (let i = 0; i < gridTotal; i++) {
        const div = document.createElement("div");
        div.classList.add("gridDiv");
        if(mode.textContent === 'Color'){
            div.addEventListener("mouseenter", addDrawing);
        } else if (mode.textContent === 'Opacity') {
            div.addEventListener("mouseenter", addOpacity);
        }

        gridContainer.appendChild(div);
    }
    gridDivs = document.querySelectorAll(".gridDiv");
}

sizeButton.addEventListener("click", () => {
    const sizeNum = setNewSize();
    const newDimension = (960 / sizeNum) - 2;
    const newGridTotal = sizeNum * sizeNum;

    size.textContent = `${sizeNum}x${sizeNum}`;

    createGrid(newGridTotal);

    gridDivs.forEach((gridDiv) => {
        gridDiv.style.height = `${newDimension}px`;
        gridDiv.style.width = `${newDimension}px`;
    });

})

resetButton.addEventListener("click", () => {
    gridDivs.forEach((gridDiv) => {
        gridDiv.style.backgroundColor = "white";
        gridDiv.style.opacity = 1.0;
    });
})

modeButton.addEventListener("click", () => {
    if(mode.textContent === 'Color'){
        mode.textContent = 'Opacity';
        modeText.textContent = 'Color';
        gridDivs.forEach((div) => {
            div.removeEventListener("mouseenter", addDrawing);
            div.addEventListener("mouseenter", addOpacity);
        });
    } else if (mode.textContent === 'Opacity') {
        mode.textContent = 'Color';
        modeText.textContent = 'Opacity';
        gridDivs.forEach((div) => {
            div.removeEventListener("mouseenter", addOpacity);
            div.addEventListener("mouseenter", addDrawing);
        });
    }

})

createGrid(256);