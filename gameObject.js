export class GameObject {
    constructor() {
        this.position = { x: 0, y: 0};
        this.rotation = 0;
    }

    update() {

    }

    render() {

    }
}

export class Circle extends GameObject {
    constructor(xPos, yPos, radious) {
        this.position = { x: xPos, y: yPos};
        this.rotation = 0;
        this.radious = radious;
    }

    update() {

    }

    render() {
        context.beginPath();
        context.arc(this.xPos, this.yPos, this.radious, Math.PI * 2, 0, false);
        context.stroke();
    }
}