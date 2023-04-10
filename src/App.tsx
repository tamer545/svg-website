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
import shieldBackpack from "./animated-svgs/shieldbackpack.svg";


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
                    <BackpackQuote quote={"I recently bought the alarm backpack and I'm very satisfied with my purchase. The alarm is loud and effective, giving me peace of mind when I'm on the go."} name={"Mark"}/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer sticky={{start: 1.6, end: 2}} style={{...alignCenter, justifyContent: 'flex-start'}}>
                <div className={`${styles.card} ${styles.sticky}`}>
                    <PricingTable/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2.1} speed={1} style={{...alignCenter, justifyContent: 'flex-end'}}>
                <div className={styles.card}>
                    <Runners/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2.5} speed={1} style={{...alignCenter, justifyContent: 'flex-end'}}>
                <div className={`${styles.card} ${styles.parallax}`}>
                    <BackpackQuote quote={"My backpack with a built-in alarm system thwarted a theft attempt, and the police were there in no time. I highly recommend it for anyone on the go!"} name={"John"}/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer sticky={{start: 2.5, end: 2.9}} style={{...alignCenter, justifyContent: 'flex-start'}}>
                <div className={`${styles.card} ${styles.sticky}`}>
                    <Image src={shieldBackpack}/>
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