export class Ball {
    constructor(game) {
        this.radious = 10;
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.direction = {
            x:1,
            y:1
        };
        this.speed = 100;
        this.position = {
            x: game.gameWidth/2,
            y: game.gameHeight/2
        };
    }

    draw(context) {
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radious, Math.PI * 2, 0, false);
        context.stroke();
    }

    update(dt) {
        this.position.x += this.speed / dt * this.direction.x;
        this.position.y += this.speed / dt * this.direction.y;

        if(this.position.x + this.radious > this.gameWidth || this.position.x - this.radious < 0){
            this.direction.x = -this.direction.x;
        }

        if(this.position.y + this.radious > this.gameHeight || this.position.y - this.radious < 0){
            this.direction.y = -this.direction.y;
        }

        let bottomOfball = this.position.y + this.radious;
        let leftOfball = this.position.x - this.radious;
        let rightOfball = this.position.x + this.radious;
        let topOfPaddle = this.game.paddle.position.y;
        let leftOfPaddle = this.game.paddle.position.x;
        let rightOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

        if(bottomOfball >= topOfPaddle) {
            if(leftOfball > leftOfPaddle && rightOfball < rightOfPaddle){
                this.direction.y = -this.direction.y;
            } else if(leftOfball < leftOfPaddle && rightOfball >= leftOfPaddle){
                this.direction.x = -this.direction.x;
                this.position.x = this.game.paddle.position.x - this.radious;;
            } else if(rightOfball > rightOfPaddle && leftOfball <= rightOfPaddle){
                this.direction.x = -this.direction.x;
                this.position.x = this.game.paddle.position.x + this.game.paddle.width + this.radious;
            }
        }
    }
}