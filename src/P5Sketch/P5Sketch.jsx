import React, { useEffect, useState } from "react";
import Sketch from "react-p5";
import deviceType from "../utils/mobileDetection";
import P5Cursor from "./P5Cursor";
import LandingText from "./LandingText";


let x = 50;
let y = 50;

let textColors = {
    white: "#ffffff",
    pink: "#f0f",
    tankMidBlue: "#04157E",
    tankDarkBlue: "#140034"
}


let nameDimens = {
    left: 200,
    top: 200,
    width: 1000,
    height: 200
}
let titleDimens = {
    left: 200,
    top: 450,
    width: 1000,
    height: 200
}

export default function P5Sketch({ props }) {


    const [dimen, setDimens] = useState();
    const [devType, setDevType] = useState();

    let orbCursor, landingName, landingTitle, font, fontSize;
    let cursorMoving = false;
    const plantImgUrl = "./plant.png";
    let img;
    let input;
    let plantXPos, plantYPos, plantH, plantW;

    let landingTextInstances = [];


    useEffect(() => {
        setDimens(props);
        let device = deviceType();
        setDevType(device);
    }, [props]);

    useEffect(() => {

    }, [])

    function initTextElements(p5) {
        landingName = new LandingText(p5, p5.displayWidth, "Erik Kimsey", font, textColors.white, nameDimens);
        landingTextInstances.push(landingName);

        landingTitle = new LandingText(p5, p5.displayWidth, "Software Developer", font, textColors.white, titleDimens);
        landingTextInstances.push(landingTitle);

        // 
    }

    function preload(p5) {
        font = p5.loadFont('./Dopestyle.ttf');
        img = p5.loadImage("https://i.imgur.com/7oRFsCR.png");
        fontSize = 40;
    }

    function setup(p5, canvasParentRef) {
        p5.createCanvas(p5.displayWidth, p5.displayHeight).parent(canvasParentRef);
        initTextElements(p5);

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
    };

    function draw(p5) {
        p5.background(textColors.tankDarkBlue);
        p5.image(img, plantXPos, plantYPos, plantW, plantH);

        if (devType !== "desktop") {
            console.log(devType);
        } else {
            if (orbCursor !== undefined) {
                orbCursor.updateCursor();
            }
        }

        if (landingName.textDrawn) {
            landingName.drawCompleteText();
        }
        if (landingTitle.textDrawn) {
            landingTitle.drawCompleteText();
        }

        if (!landingName.textDrawn) {
            let rIndex = Math.ceil(p5.millis() / 100) - 1;
            landingName.drawText(rIndex);
        }

        if (!landingTitle.textDrawn) {
            let rIndex = Math.ceil(p5.millis() / 100) - 1;
            landingTitle.drawText(rIndex);
        }




    }

    return (
        <>
            <Sketch preload={preload} setup={setup} draw={draw} style={{ position: "fixed", zIndex: 0 }} />
        </>)
}