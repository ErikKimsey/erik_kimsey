import React, { useRef } from 'react';
import "./playground.scss";

export default function Playground() {

    const playgroundContentRef = useRef();

    return (
        <div className="playgroundContainer" >
            <div className='playgroundHeader'>
                <div className='label'>Playground</div>
            </div>
            <div className='playgroundContent' ref={playgroundContentRef}></div>
        </div>
    );
}
