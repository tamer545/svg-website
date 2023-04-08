import React from 'react';
import './App.css';
import {Image} from 'react-bootstrap';
import alarm from "./pre-made-svgs/alarm-better.svg";

import {Parallax, ParallaxLayer} from "@react-spring/parallax";
//@ts-ignore
import styles from './styles.module.css'
import BouncingPack from "./animated-svgs/BouncingPack";
import Arrow from "./Arrow";
import BackpackCard from "./BackpackCard";
import BackpackQuote from "./BackpackQuote";
import Runners from "./animated-svgs/Runners";
import PricingTable from "./PricingTable";
import SourcesGroup from "./SourcesGroup";


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
                           "Behold! A backpack fortified with an impregnable shield, fortified by a sophisticated anti-theft mechanism that emits sonorous alarms to deter nefarious felons from laying hands on your precious belongings."
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
            <ParallaxLayer offset={0.8} speed={1} style={{...alignCenter, justifyContent: 'flex-end'}}>
                <div className={`${styles.card} ${styles.parallax}`}>
                    <BackpackCard/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1.5} speed={1} style={{...alignCenter, justifyContent: 'flex-end'}}>
                <div className={`${styles.card} ${styles.parallax}`}>
                    <BackpackQuote/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1.9} speed={1} style={{...alignCenter, justifyContent: 'flex-end'}}>
                <div className={`${styles.card} ${styles.parallax}`}>
                    <PricingTable/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2.1} speed={1} style={{...alignCenter, justifyContent: 'flex-end'}}>
                <div className={styles.card}>
                    <Runners/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={1}>
                <div className={styles.card}>
                    <SourcesGroup/>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
}

export default App;