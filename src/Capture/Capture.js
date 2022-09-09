import React, { useState, useEffect } from 'react';
import './capture.scss';

export default function Capture() {


    const [constraints, setContraints] = useState({ audio: true, video: { width: 1280, height: 720 } });


    return (
        <div className="capture-container">
            <div className="camera">
                <video id="video"></video>
            </div>
            <canvas id="canvas">
            </canvas>
            <div className="output">
                <img id="photo" />
            </div>


        </div>
    )
}
