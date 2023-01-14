const grid = document.querySelector("#grid");
const gridWidth = grid.clientWidth
const gridHeight = grid.clientHeight


for (let y = 0; y < 16; y++) {

    // adding row
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.display = "flex"

    // adding column
    for (let x = 0; x < 16; x++) {
        const column = document.createElement("div");
        column.classList.add("pixel");
        column.style.width = `${gridWidth/16}px`;
        column.style.height = `${gridHeight/16}px`;

        column.style.outline = "1px solid";
        // column.style.outlineOffset = "1px";

        row.appendChild(column);
    }

    grid.appendChild(row);
}