import React, { useRef, useState, useEffect } from 'react';
import "./experience.scss";

export default function Experience() {

    const containerRef = useRef();

    return (
        <div className="playground-container" ref={containerRef}>
            EXPERIENCE
        </div>
    );
}
