import React, { useRef, useState, useEffect } from "react";
import "./landing.scss";
import LandingBlurb from "./LandingBlurb";

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
            ref={sketchRef}
        >
            <LandingBlurb />
        </div>
    );

}

export default Landing;
