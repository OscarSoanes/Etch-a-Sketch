
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
            
            row.appendChild(column);
        }
        grid.appendChild(row);
    }
}

function clearGrid() {
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach(pixel => pixel.remove());
}

function btnCounter(e) {
    const length = prompt("How many pixels do you want?")

    if (length < 4) {
        alert("Pixel count is too little, please enter a different number")
        return
    } else if (length > 64) {
        alert("Pixel count is too high, please enter a different value")
        return
    } else if (isNaN(length)) {
        alert("Input was not a number, please enter a different value")
        return;
    }

    clearGrid();
    makeGrid(length);
    hover();
}

function hover() {
    function createRandomColour() {
        var letters = "0123456789ABCDEF";
        var colour = "#";
        for (let i = 0; i < 6; i++) {
            colour += letters[Math.floor(Math.random() * 16)];
        }
        return colour
    }

    const pixels = document.querySelectorAll(".pixel");
    
    pixels.forEach(pixel => pixel.addEventListener('mouseover', function (e) {
        
        if (rainbow == false) {
            pixel.classList.add("coloured");
            pixel.style.backgroundColor = ""
            return;
        }

        pixel.style.backgroundColor = `${createRandomColour()}`;
    }));
}

// Start
const btnCount = document.querySelector(".pixelCounter");
btnCount.addEventListener('click', btnCounter)

var rainbow = false

const btnBlack = document.querySelector(".black");
const btnRainbow = document.querySelector(".rainbow");
btnBlack.classList.add("selected");

// Event handlers
btnBlack.addEventListener('click', function (e) {
    btnBlack.classList.add("selected");
    btnRainbow.classList.remove("selected");
    rainbow = false;
});

btnRainbow.addEventListener('click', function (e) {
    btnBlack.classList.remove("selected");
    btnRainbow.classList.add("selected");
    rainbow = true;
});

makeGrid(16);
hover()
