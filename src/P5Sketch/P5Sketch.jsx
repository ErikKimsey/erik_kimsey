import React, { useEffect, useState } from "react";
import Sketch from "react-p5";
import deviceType from "../utils/mobileDetection";
import P5Cursor from "./P5Cursor";


let x = 50;
let y = 50;

export default function P5Sketch({ props }) {


    const [dimen, setDimens] = useState();
    const [devType, setDevType] = useState();

    let orbCursor;
    let cursorMoving = false;
    const plantImgUrl = "./plant.png";
    let img;
    let input;
    let plantXPos, plantYPos, plantH, plantW;


    useEffect(() => {
        setDimens(props);
        let device = deviceType();
        setDevType(device);
    }, [props]);

    useEffect(() => {

    }, [])

    function preload(p5) {
        img = p5.loadImage("https://i.imgur.com/7oRFsCR.png");
    }

    function setup(p5, canvasParentRef) {
        p5.createCanvas(p5.displayWidth, p5.displayHeight).parent(canvasParentRef);
        orbCursor = new P5Cursor(p5, 11);
        if (devType === "desktop") {
            plantXPos = p5.displayWidth * 0.33;
            plantYPos = p5.displayHeight * 0;
            plantW = p5.displayWidth * 0.5;
            plantH = (p5.displayWidth * 0.5) * 0.84;
        } else {
            plantXPos = 0;
            plantYPos = (p5.displayHeight) - img.width / 2;
            plantW = p5.displayWidth;
            plantH = (p5.displayWidth) * 0.84;
        }
        // if (img && img.type === "image") {
        // }
    };

    function draw(p5) {
        p5.background(255);
        p5.image(img, plantXPos, plantYPos, plantW, plantH);

        if (devType !== "desktop") {
            console.log(devType);
        } else {
            if (orbCursor !== undefined) {
                orbCursor.updateCursor();
            }
        }
    }

    return (
        <>
            <Sketch preload={preload} setup={setup} draw={draw} style={{ position: "fixed", zIndex: 0 }} />
        </>)
}