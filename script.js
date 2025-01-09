const gridContainer = document.querySelector(".gridContainer");

for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("gridDiv");
    div.addEventListener("mouseenter", (e) => {
        console.log(`entered ${e.target}`);
          e.target.style.backgroundColor = "blue";
    });
    gridContainer.appendChild(div);
}