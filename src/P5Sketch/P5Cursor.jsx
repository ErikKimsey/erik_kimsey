

export default class P5Cursor {
    constructor(p5, diam) {
        this.p5 = p5;
        this.diam = diam;
        this.radius = 20;
        this.orbit = null;
        this.rate = 0.1;
        this.xMove = 50;
    }



    calcOrbit(rad) {
        let y = rad * this.p5.sin(this.rate) + this.p5.mouseY;
        let x = rad * this.p5.cos(this.rate) + this.p5.mouseX;
        this.rate += 0.1;
        return { x, y }
    }

    updateCursor() {
        if (this.xMove > 48) {
            this.xMove -= 2;
        } else if (this.xMove < 48) {
            this.xMove += 2;
        }

        this.xMove += this.p5.floor(this.p5.movedX / 5);

        let { x, y } = this.calcOrbit(this.radius);
        this.p5.fill(this.p5.color(255, 111, 255));
        this.p5.noStroke();
        this.p5.ellipse(x, y, this.diam);
    }
}

