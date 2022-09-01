import React, { useEffect, useState } from "react";
import Sketch, { fill, color, ellipse, rect, text, background } from "react-p5";


let x = 50;
let y = 50;

export default function P5Sketch({ props }) {

    const p5Deconstructed = null;

    const [dimen, setDimens] = useState();

    useEffect(() => {
        setDimens(props);
    }, [props]);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.displayWidth, p5.displayHeight).parent(canvasParentRef);
    };

    const draw = (p5) => {

        p5.background(255);

    };

    return (
        <>
            <Sketch setup={setup} draw={draw} style={{ position: "fixed", zIndex: 0 }} />
        </>)
}