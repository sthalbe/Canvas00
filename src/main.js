// const { Paddle } = require("./src/paddle.js");
import { Paddle } from "./paddle.js";
import InputHandler from "./inputHandler.js";

const mainCanvas = document.getElementById("mainCanvas");
const context = mainCanvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
mainCanvas.width = GAME_WIDTH;
mainCanvas.height = GAME_HEIGHT;
// context.clearRect(0, 0, 800, 600);
InputHandler.init();

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(context);

let lastTime = 0;

function gameLoop(timeStamp){
    let dt = timeStamp - lastTime;
    lastTime = timeStamp;
    context.clearRect(0, 0, 800, 600);
    paddle.update(dt);
    paddle.draw(context);
    requestAnimationFrame(gameLoop);
}

InputHandler.addListener(InputHandler.eventType.keyDown, paddle.handleKeyDown.bind(paddle));
InputHandler.addListener(InputHandler.eventType.keyUp, paddle.handleKeyUp.bind(paddle));
gameLoop();