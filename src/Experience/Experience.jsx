import React, { useRef, useState, useEffect } from 'react';
import "./experience.scss";

import data from "../__data/data";

export default function Experience() {

    const containerRef = useRef();

    return (
        <div className="experienceContainer" ref={containerRef}>
            <div className='experienceHeader'>
                <div className='label'>Experience In Brief</div>
            </div>
        </div>
    );
}
