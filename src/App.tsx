import React, {useEffect, useRef} from 'react';
// @ts-ignore
import './App.css';
import {Container, Image} from 'react-bootstrap';
import SVGAccordion from "./SVGAccordion";
// @ts-ignore
import pack from "./picture/backpack.png";

// @ts-ignore
import pack2 from "./picture/backpack.jpg";
// @ts-ignore
import bouncer from "./picture/bouncingpack.svg";
// @ts-ignore
import alarm from "./pre-made-svgs/alarm-better.svg";
// @ts-ignore
import scroll from "./picture/arrow.svg";

// @ts-ignore
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
// @ts-ignore
import styles from './styles.module.css'
import BouncingPack from "./animated-svgs/BouncingPack";
import Arrow from "./Arrow";
import BackpackCard from "./BackpackCard";
import BackpackQuote from "./BackpackQuote";
import Runners from "./animated-svgs/Runners";


function App() {
    const alignCenter = {display: 'flex', alignItems: 'center'}

    return (
        <Parallax pages={4}>

            <ParallaxLayer offset={0} speed={1}>
                <div>
                    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet'
                          type='text/css'/>
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='title'>
                        <span>
                            Anti-theft backpack
                        </span>
                        <br/>
                        <span id="smaller-title">
                            A backpack with a built-in alarm system that alerts the owner when
                        someone tries to open or steal it.
                        </span>
                        <br/>
                        <Image src={alarm} width={'200px'}></Image>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.3} speed={0.5} style={{...alignCenter, justifyContent: 'center'}}>
                <Arrow/>
            </ParallaxLayer>

            <ParallaxLayer sticky={{start: 0.3, end: 0.7}} style={{...alignCenter, justifyContent: 'flex-start'}}>
                <div className={`${styles.card} ${styles.sticky}`}>
                    <BouncingPack/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1} style={{...alignCenter, justifyContent: 'flex-end'}}>
                <div className={`${styles.card} ${styles.parallax}`}>
                    <BackpackCard/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1.7} speed={1} style={{...alignCenter, justifyContent: 'flex-end'}}>
                <div className={`${styles.card} ${styles.parallax}`}>
                    <BackpackQuote/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2.2} speed={1} style={{...alignCenter, justifyContent: 'flex-end'}}>
                <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
                    <Runners/>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
}

export default App;