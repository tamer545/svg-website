import React from "react";
// @ts-ignore
import backpack from "../pre-made-svgs/bbj.svg";


function BouncingPack() {
    return (
        <svg fill="#000000" height="400" width="600" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg">
            <image href={backpack} x="200" y="200">
                <animate attributeName="y"
                         values="200;0;200;0;200"
                         dur="2s"
                         repeatCount="indefinite"/>
                <animate attributeName="x"
                         values="0;200;400;200;0"
                         dur="2s"
                         repeatCount="indefinite"/>
            </image>
        </svg>
    );
}
export default BouncingPack;