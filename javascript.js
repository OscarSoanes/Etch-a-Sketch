
function makeGrid(pixels) {
    const grid = document.querySelector("#grid");
    const size = grid.clientWidth;
    for (let y = 0; y < pixels; y++) {
        // adding row
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.display = "flex"

        // adding column
        for (let x = 0; x < pixels; x++) {
            const column = document.createElement("div");
            column.classList.add("pixel");
            column.style.width = `${size / pixels}px`;
            column.style.height = `${size / pixels}px`;

            column.style.outline = "1px solid";
            // column.style.outlineOffset = "1px";

            row.appendChild(column);
        }
        grid.appendChild(row);
    }
}

function clearGrid() {
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach(pixel => pixel.remove());
}

makeGrid(16);

// hover effect
const pixels = document.querySelectorAll(".pixel");

pixels.forEach(pixel => pixel.addEventListener('mouseover', function (e) {
    pixel.classList.add("coloured");
}));

// assign grid count
const btnCount = document.querySelector(".pixelCounter");
btnCount.addEventListener('click', function (e) {
    const length = prompt("How many pixels do you want?")
    
    if (length < 4) {
        alert("Pixel count is too little, please enter a different number")
        return
    } else if (length > 64) {
        alert("Pixel count is too high, please enter a different value")
        return
    }

    clearGrid()
    makeGrid(length)
})