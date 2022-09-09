import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import "./landing.scss";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";
import MobileNav from "../Nav/MobileNav/MobileNav";

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
            <>
                <Banner />
                <Nav />
            </>
        </div>
    );
}

export default Landing;
