    import React from "react";
    // @ts-ignore
    import person from "../pre-made-svgs/hiker-walk-svgrepo-com.svg";
    import robber from "../pre-made-svgs/robber-svgrepo-com.svg";
    import police from "../pre-made-svgs/police-car-7-svgrepo-com.svg";


    function Runners() {
        return (
                <svg height="300" width="1500" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" >
                    <image href={person}>
                        <animate attributeName="x"
                                 values="400;1900"
                                 dur="2.5s"
                                 repeatCount="indefinite"/>
                    </image>
                    <image href={robber}>
                        <animate attributeName="x"
                                 values="200;1800"
                                 dur="2.5s"
                                 repeatCount="indefinite"/>
                    </image>
                    <image href={police}>
                        <animate attributeName="x"
                                 values="0;1400"
                                 dur="2.5s"
                                 repeatCount="indefinite"/>
                    </image>
                </svg>
        );
    }

    export default Runners;