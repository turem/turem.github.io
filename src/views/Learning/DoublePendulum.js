import React from "react";
import Sketch from "react-p5";
// @material-ui/core components

export default function DoublePendulum() {

    const { sin, cos } = Math;

    let r1 = 125;
    let r2 = 125;
    let m1 = 10;
    let m2 = 10;
    let a1 = 10;
    let a2 = 0;
    let a1_v = 0;
    let a2_v = 0;
    let g = 1;

    let px2 = -1;
    let py2 = -1;
    let cx, cy;

    let buffer;

    let setup = (p5, canvasParentRef) => {
        p5.createCanvas(600, 400).parent(canvasParentRef);
        p5.pixelDensity(1);
        a1 = Math.PI / 2;
        a2 = Math.PI / 2;
        cx = p5.width / 2;
        cy = 100;
        buffer = p5.createGraphics(p5.width, p5.height).parent(canvasParentRef);
        buffer.background(175);
        buffer.translate(cx, cy);
    }

    let draw = (p5) => {
        p5.background(255);
        p5.stroke(0);
        p5.strokeWeight(2);
        p5.image(buffer, 0, 0, p5.width, p5.height);

        p5.translate(cx, cy);

        let num1 = -g * (2 * m1 + m2) * sin(a1);
        let num2 = -m2 * g * sin(a1 - 2 * a2);
        let num3 = -2 * sin(a1 - a2) * m2;
        let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
        let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
        let a1_a = (num1 + num2 + num3 * num4) / den;

        num1 = 2 * sin(a1 - a2);
        num2 = a1_v * a1_v * r1 * (m1 + m2);
        num3 = g * (m1 + m2) * cos(a1);
        num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
        den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
        let a2_a = (num1 * (num2 + num3 + num4)) / den;

        let x1 = r1 * sin(a1);
        let y1 = r1 * cos(a1);

        let x2 = x1 + r2 * sin(a2);
        let y2 = y1 + r2 * cos(a2);

        p5.line(0, 0, x1, y1);
        p5.fill(0);
        p5.ellipse(x1, y1, m1, m1);

        p5.line(x1, y1, x2, y2);
        p5.fill(0);
        p5.ellipse(x2, y2, m2, m2);

        a1_v += a1_a;
        a2_v += a2_a;
        a1 += a1_v;
        a2 += a2_v;

        buffer.stroke(0);
        if (p5.frameCount > 1) {
            buffer.line(px2, py2, x2, y2);
        }

        px2 = x2;
        py2 = y2;
    }

    return (
        <>
            <Sketch setup={setup} draw={draw} />
            <span>
                <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C
                    users after installed base benefits.
                        </p>
                <br />
                <p>
                    Dramatically visualize customer directed convergence
                    without revolutionary ROI. Collaboratively
                    administrate empowered markets via plug-and-play
                    networks. Dynamically procrastinate B2C users after
                    installed base benefits.
                        </p>
                <br />
                <p>
                    Dramatically visualize customer directed convergence
                    without revolutionary ROI. Collaboratively
                    administrate empowered markets via plug-and-play
                    networks. Dynamically procrastinate B2C users after
                    installed base benefits.
                        </p>
                <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C
                    users after installed base benefits.
                        </p>
                <br />
                <p>
                    Dramatically visualize customer directed convergence
                    without revolutionary ROI. Collaboratively
                    administrate empowered markets via plug-and-play
                    networks. Dynamically procrastinate B2C users after
                    installed base benefits.
                        </p>
                <br />
                <p>
                    Dramatically visualize customer directed convergence
                    without revolutionary ROI. Collaboratively
                    administrate empowered markets via plug-and-play
                    networks. Dynamically procrastinate B2C users after
                    installed base benefits.
                        </p>
            </span>
        </>
    );
}
