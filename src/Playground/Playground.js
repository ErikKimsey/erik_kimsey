import React, { useRef } from 'react';
import "./playground.scss";

import PlaygroundCarousel from './PlaygroundCarousel';

export default function Playground() {

    const playgroundContentRef = useRef();

    return (
        <div className="playgroundContainer" >
            <div className='playgroundHeader'>
                <div className='label'>Playground</div>
            </div>
            <div className='playgroundContent'>
                <PlaygroundCarousel />
            </div>
        </div>
    );
}
