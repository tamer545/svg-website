import React, { useState } from 'react';
import {Carousel, Image} from 'react-bootstrap';
// @ts-ignore
import alarm from "./pre-made-svgs/alarm.svg";
// @ts-ignore
import backpack from "./picture/backpack.svg";
// @ts-ignore
import bbj from "./pre-made-svgs/bbj.svg";

function SVGCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number, e:any) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Image src={alarm} className="App-logo" alt="alarm" width={"200px"}/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={backpack} className="App-logo" alt="backpack" width={"200px"}/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={bbj} className="App-logo" alt="bbj" width={"200px"}/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SVGCarousel