import React, { useEffect, useRef, useState } from 'react';
import "./playground.scss";
import Traveling from '../ThreeSketches/Traveling';

export default function Playground() {

    let [divDimens, setDivDimens] = useState();
    const playgroundContentRef = useRef();

    useEffect(() => {
        let w = playgroundContentRef.current.offsetWidth;
        let h = playgroundContentRef.current.offsetHeight;
        setDivDimens({ w: w, h: h });
    }, []);

    return (
        <div className="playgroundContainer" >
            <div className='playgroundHeader'>
                <div className='label'>Playground</div>
            </div>
            <div className='playgroundContent' ref={playgroundContentRef}>
                {divDimens && <Traveling dimens={divDimens} />}
            </div>
        </div>
    );
}
