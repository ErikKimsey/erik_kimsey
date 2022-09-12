import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function randomInt() {
    return Math.floor(Math.random() * 255);
}

function randomColor() {
    const rgb = [];
    for (let index = 0; index < 3; index++) {
        rgb.push(randomInt());
    }
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

function CarTestItem(props) {
    let { col } = props;
    let [color, setColor] = useState();
    console.log(col);

    useEffect(() => {
        setColor(col);
    }, [])
    return (
        <>
            {color && <div style={{ width: "100%", height: "300px", backgroundColor: `${col}` }}><h1>{col}</h1></div>}
        </>)

}


export default function PlaygroundCarousel(props) {
    const [items, setItems] = useState();

    useEffect(() => {
        let tempItems = [];
        console.log("why ????");
        for (let i = 0; i < 5; i++) {
            let col = randomColor();
            console.log(col);
            tempItems.push(col);
        }

        setItems(tempItems);
    }, []);


    return (
        <Carousel axis={"horizontal"} showThumbs={false}>
            {
                items && items.map((e, i) => {
                    return <div style={{ width: "100%", height: "300px", backgroundColor: `${e}` }} key={i}><h1>{e}</h1></div>
                })
            }
        </Carousel>
    )
}