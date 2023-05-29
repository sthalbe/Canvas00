import { Paddle } from "./paddle.js";
import { Ball } from "./ball.js";
import InputHandler from "./inputHandler.js";

export class Game{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start(){
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        this.gameObjects = [this.ball, this.paddle];

        InputHandler.init();
        InputHandler.addListener(InputHandler.eventType.keyDown, this.paddle.handleKeyDown.bind(this.paddle));
        InputHandler.addListener(InputHandler.eventType.keyUp, this.paddle.handleKeyUp.bind(this.paddle));
    }

    update(dt) {
        this.gameObjects.forEach(obj => obj.update(dt));
    }

    draw(context) {
        this.gameObjects.forEach(obj => obj.draw(context));
    }
}