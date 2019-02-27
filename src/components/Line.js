import * as PIXI from "pixi.js";

class Line extends PIXI.Graphics {
    constructor(points, lineSize, lineColor) {
        super();
        var s = this.lineWidth = lineSize;
        var c = this.lineColor = lineColor || "0x000000";
        this.points = points;
        this.lineStyle(s, c)
        this.moveTo(points[0], points[1]);
        this.lineTo(points[2], points[3]);
    }
    
    updatePoints(p,color) {
        var points = this.points = p.map((val, index) => val || this.points[index]);
        var s = this.lineWidth, c = color;
        this.clear();
        this.lineStyle(s, c);
        this.moveTo(points[0], points[1]);
        this.lineTo(points[2], points[3]);
    }
}

export default Line;
