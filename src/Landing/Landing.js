import React, { useRef, useState, useEffect } from "react";
import "./landing.scss";
import Banner from "../Banner/Banner";

function Landing(props) {
    const sketchRef = useRef();
    const [dimens, setDimens] = useState({ w: 0, h: 0 });

    useEffect(() => {
        if (sketchRef.current) {
            setDimens({ w: sketchRef.current.offsetWidth, h: sketchRef.current.offsetHeight });
        }
    }, [])

    return (
        <div
            className="landing-container"
        >
            <Banner />
        </div>
    );
}

export default Landing;
