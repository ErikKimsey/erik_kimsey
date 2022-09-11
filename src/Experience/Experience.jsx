import React, { useRef } from 'react';
import "./experience.scss";

export default function Experience() {

    const containerRef = useRef();

    return (
        <div className="experienceContainer" ref={containerRef}>
            <div className='experienceHeader'>
                <div className='label'>Experience In Brief</div>
            </div>
            <div className='experienceContent'></div>
        </div>
    );
}
