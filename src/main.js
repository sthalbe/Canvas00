import { Game } from "./game.js";

const mainCanvas = document.getElementById("mainCanvas");
const context = mainCanvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
mainCanvas.width = GAME_WIDTH;
mainCanvas.height = GAME_HEIGHT;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

let lastTime = 0;
function gameLoop(timestamp){
    let dt = timestamp - lastTime;
    lastTime = timestamp;
    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(dt);
    game.draw(context);
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);