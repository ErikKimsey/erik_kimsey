import React, { Component, useRef, useState, useEffect } from "react";
import "./landing.scss";
import { data, coreSkills, subData } from "./data";
import IconLinks from "../IconLinks/IconLinks";
import P5Sketch from "../P5Sketch/P5Sketch";

function Landing(props) {
    console.log(props);
    const sketchRef = useRef();
    const [dimens, setDimens] = useState({ w: 0, h: 0 });
    const [data, setData] = useState();

    useEffect(() => {
        if (sketchRef.current) {
            setDimens({ w: sketchRef.current.offsetWidth, h: sketchRef.current.offsetHeight });
        }
    }, [])

    return (
        <div
            className="landing-container"
            ref={sketchRef}
        >
            {/* {dimens.w > 0 && <P5Sketch props={dimens} />} */}
            {/* <IconLinks /> */}
        </div>
    );

}

export default Landing;
