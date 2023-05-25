import InputHandler from "./inputHandler.js";

console.log("haha");
const mainCanvas = document.getElementById("mainCanvas");
/** @type {CanvasRenderingContext2D} */
const context = mainCanvas.getContext("2d");

// Usage
function init()
{
    InputHandler.init();
}

// Game object 1
const gameObject1 = {
  handleKeyDown: function(key) {
    // Handle keydown event for game object 1
    console.log("Game object 1 handles keydown:", key);
  },
  
  handleKeyUp: function(key) {
    // Handle keyup event for game object 1
    console.log("Game object 1 handles keyup:", key);
  }
};

// Game object 2
const gameObject2 = {
  handleKeyDown: function(key) {
    // Handle keydown event for game object 2
    console.log("Game object 2 handles keydown:", key);
  },
  
  handleKeyUp: function(key) {
    // Handle keyup event for game object 2
    console.log("Game object 2 handles keyup:", key);
  }
};

// Subscribe game object 1 to keydown and keyup events
InputHandler.subscribeKeyDown(gameObject1.handleKeyDown.bind(gameObject1));
InputHandler.subscribeKeyUp(gameObject1.handleKeyUp.bind(gameObject1));

// Subscribe game object 2 to keydown and keyup events
InputHandler.subscribeKeyDown(gameObject2.handleKeyDown.bind(gameObject2));
InputHandler.subscribeKeyUp(gameObject2.handleKeyUp.bind(gameObject2));

// Unsubscribe game object 2 from keyup event
InputHandler.unsubscribeKeyUp(gameObject2.handleKeyUp.bind(gameObject2));

// Game Loop
function update() {
  requestAnimationFrame(update); // Repeat the game loop
}

// Start the game loop
init();
update();

function init()
{
    console.log("init" + window.innerWidth + "/ "+ window.innerHeight);
    mainCanvas.width = document.body.clientWidth;
    mainCanvas.height = document.body.clientHeight;
    render();
}

let xPos = 100;
let yPos = 100;
let radius = 10;
let addValue = 1;
function render()
{
    context.clearRect(0,0, mainCanvas.width, mainCanvas.height);
    context.beginPath();
    context.arc(xPos, yPos, 10, Math.PI * 2, 0, false);
    context.stroke();
    // const canvasRect = mainCanvas.getBoundingClientRect();
    // const leftBoundary = canvasRect.left + radius;
    // const rightBoundary = canvasRect.right - radius;
    // const topBoundary = canvasRect.top + radius;
    // const bottomBoundary = canvasRect.bottom - radius;

    // document.addEventListener("keydown", function (event) {
    //     if (event.key === "ArrowLeft" && xPos > radius) {
    //         xPos -= addValue;
    //     } else if (event.key === "ArrowRight" && xPos < mainCanvas.width - radius) {
    //         xPos += addValue;
    //     } else if (event.key === "ArrowUp" && yPos > radius) {
    //         yPos -= addValue;
    //     } else if (event.key === "ArrowDown" && yPos < mainCanvas.height - radius) {
    //         yPos += addValue;
    //     }  
    //   });


    window.requestAnimationFrame(draw);
}

init();