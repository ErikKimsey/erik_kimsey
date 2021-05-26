import React, { useEffect, useState } from 'react';
import Unity, { UnityContext } from "react-unity-webgl";


export default function Bush() {
    // const [unityCTX, setUnityCTX] = useState();
    let unityContext;
    
    useEffect(()=>{
       unityContext = new UnityContext({
            loaderUrl: "/Users/erikkimsey/Desktop/erik_kimsey_portfolio_playground/public/build_3.loader.js",
            dataUrl: "/Users/erikkimsey/Desktop/erik_kimsey_portfolio_playground/public/build_3.data",
            frameworkUrl: "/Users/erikkimsey/Desktop/erik_kimsey_portfolio_playground/public/build_3.framework.js",
            codeUrl: "/Users/erikkimsey/Desktop/erik_kimsey_portfolio_playground/public/build_3.wasm",
        });
    },[]);

    // function fetchBush(){
    //     fetch('./build_3')
    //     .then((res)=>{
    //         console.log(res);
    //     })
    //     .catch((err)=>{
    //         console.error(err);
    //     })
    // }

    return (
        <div>
            {unityContext && <Unity unityContext={unityContext}/>}
        </div>
    )
}
