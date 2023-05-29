export class Paddle {
    constructor(game){
        this.width = 150;
        this.height = 30;
        this.direction = {
            x:0,
            y:0
        };
        this.speed = 100;
        this.position = {
            x: game.gameWidth/2 - this.width / 2,
            y: game.gameHeight - this.height - 10,
        };
    }

    draw(context) {
        context.fillStyle = "#0ff";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    handleKeyDown(result){
        if (result.lastXAxisInput === "left") {
            this.direction.x = -1;
        } else if(result.lastXAxisInput === "right") {
            this.direction.x = 1;
        }

        if (result.lastYAxisInput === "up") {
            this.direction.y = -1;
        } else if(result.lastYAxisInput === "down") {
            this.direction.y = 1;
        }
    }

    handleKeyUp(result){
        if (result.lastXAxisInput === "left") {
            this.direction.x = -1;
        } else if(result.lastXAxisInput === "right") {
            this.direction.x = 1;
        } else {
            this.direction.x = 0;
        }
        
        if (result.lastYAxisInput === "up") {
            this.direction.y = -1;
        } else if(result.lastYAxisInput === "down") {
            this.direction.y = 1;
        } else {
            this.direction.y = 0;
        }
    }

    update(dt) {
        this.position.x += this.direction.x / dt * this.speed;
        this.position.y += this.direction.y / dt * this.speed; 
    }
}