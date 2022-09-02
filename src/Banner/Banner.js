import React, { useEffect, useState } from "react";
import "./banner.scss";
import "../Nav/Nav";
import { Spin } from "react-burgers";

export default function Banner(props) {
    console.log(props);

    const [iconActive, setIconActive] = useState(false);

    useEffect(() => {
        setIconActive(props.isActive);
    }, [])

    function handleToggle() {
        this.props.toggle();
    };

    return (
        <div className="banner-container">
            <div className="toggle-logo-container">
                <span
                    className="navbar-toggle"
                    id="js-navbar-toggle"
                    onClick={handleToggle}
                >
                    <Spin
                        className="spin"
                        active={iconActive}
                        color="white"
                    />
                </span>
            </div>
            <div className="text-container">
                <div className="name banner-item">Erik Kimsey</div>
                <div className="underscore banner-item"> </div>
                <div className="role banner-item">Creative Developer</div>
            </div>
        </div>
    );
}

