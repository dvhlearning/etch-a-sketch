const gridContainer = document.querySelector(".gridContainer");
const sizeButton = document.querySelector(".sizeButton");
const resetButton = document.querySelector(".resetButton");
const inkColor = "blue";

let gridDivs = document.querySelectorAll(".gridDiv");
let size = document.querySelector(".size");


function getNewSize() {
    const sNum = prompt("Please enter a new size (1-100):");
    let testNum = Number(sNum);

    if (!Number.isNaN(testNum)){
        console.log(`CORRECT input: ${testNum}`);
        if(sNum >= 1 && sNum <= 100){
            return sNum;
        } else {
            console.log(`ERROR: ${testNum} is out of range`);
            return getNewSize();
        }
    } else {
        console.log(`ERROR: ${testNum} is not a number`);
        return getNewSize();
    }
}
function createGrid(gridTotal) {
    gridContainer.innerHTML = '';
    for (let i = 0; i < gridTotal; i++) {
        const div = document.createElement("div");
        div.classList.add("gridDiv");
        div.addEventListener("mouseenter", (e) => {
            console.log(`entered ${e.target}`);
            //e.target.style.backgroundColor = inkColor;
            if (e.target.style.opacity){
                e.target.style.opacity = e.target.style.opacity - 0.1;
            } else {
                e.target.style.opacity = 0.9;
            }

        });
        gridContainer.appendChild(div);
    }
    gridDivs = document.querySelectorAll(".gridDiv");
}

sizeButton.addEventListener("click", () => {
    const sizeNum = getNewSize();
    console.log(`1. sizeNum = ${sizeNum}`);
    const newDimension = (960 / sizeNum) - 2;
    console.log(`2. newDimension = ${newDimension}`);
    const newGridTotal = sizeNum * sizeNum;
    console.log(`3. newGridTotal = ${newGridTotal}`);
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

createGrid(256);