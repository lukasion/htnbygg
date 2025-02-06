import {motion, useAnimate} from "motion/react"
import {useEffect} from "react";

export default function Preloader() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const animateLoader = () => {
            animate(
                [
                    [".h1", {pathLength: 0.5, pathOffset: 0}],
                    [".h1", {pathLength: 0.005, pathOffset: 0}],
                    [".h2", {pathLength: 0.5, pathOffset: 0.5}, {at: "<"}]
                ],
                {duration: 2, ease: "linear", repeat: Infinity}
            );
            animate(
                [
                    [".t1", {pathLength: 0.5, pathOffset: 0}],
                    [".t1", {pathLength: 0.005, pathOffset: 0}],
                    [".t2", {pathLength: 0.5, pathOffset: 0.5}, {at: "<"}]
                ],
                {duration: 2, ease: "linear", repeat: Infinity}
            );
            animate(
                [
                    [".n1", {pathLength: 1.1, pathOffset: 0}],
                    [".n1", {pathLength: 0, pathOffset: 0}]
                ],
                {duration: 1.8, repeat: Infinity, repeatDelay: 0.6}
            );
            animate(
                [
                    [".n2", {pathLength: 1.1, pathOffset: 0}],
                    [".n2", {pathLength: 0, pathOffset: 0}]
                ],
                {duration: 2, repeat: Infinity, repeatDelay: 0.6}
            );
        };

        animateLoader();
    }, []);

    return (
        <div>
            <svg
                ref={scope}
                className="w-[350px] md:w-[500px] md:h-[350px]"
                viewBox="0 0 132.29167 92.604166"
                version="1.1"
                id="svg5"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs
                    id="defs2">
                    <linearGradient
                        id="linearGradient1160"
                    >
                        <stop
                            style={{stopColor: "#000000", stopOpacity: 1}}
                            offset="0"
                            id="stop1158"/>
                    </linearGradient>
                    <rect
                        x="21.665035"
                        y="311.43488"
                        width="735.25714"
                        height="327.68365"
                        id="rect113"/>
                </defs>
                <g
                    id="layer1">
                    <g
                        aria-label="HTN"
                        transform="matrix(0.26458333,0,0,0.26458333,5.7108987,-33.668319)"
                        id="text111"
                        style={{
                            fontSize: "192px",
                            lineHeight: 0,
                            fontFamily: "Scheherazade",
                            whiteSpace: "pre",
                            display: "inline",
                            stroke: "#ffffff",
                            strokeWidth: "5.15906"
                        }}
                    >
                        <motion.path
                            className="h1"
                            initial={{pathLength: 0.5, pathOffset: 0.5}}
                            d="M 120.54406,315.37752 H 68.704062 v 52.224 H 31.264063 v -134.4 h 37.439999 v 47.04 h 51.839998 v -47.04 h 37.44 v 134.4 h -37.44 z"
                            style={{fontFamily: "Melbourne Bold", fillOpacity: 0, stroke: "#ffffff"}}
                            id="path7065"/>
                        <motion.path
                            className="h2"
                            initial={{pathLength: 0, pathOffset: 1}}
                            d="M 120.54406,315.37752 H 68.704062 v 52.224 H 31.264063 v -134.4 h 37.439999 v 47.04 h 51.839998 v -47.04 h 37.44 v 134.4 h -37.44 z"
                            style={{fontFamily: "Melbourne Bold", fillOpacity: 0, stroke: "#ffffff"}}
                            id="path7065"/>
                        <motion.path
                            className="t1"
                            initial={{pathLength: 0.5, pathOffset: 0.5}}
                            d="m 295.26411,267.95352 h -43.392 v 99.648 h -37.44 v -99.648 h -43.392 v -34.752 h 124.224 z"
                            style={{fontFamily: "Melbourne Bold", fillOpacity: 0, stroke: "#ffffff"}}
                            id="path7067"/>
                        <motion.path
                            className="t2"
                            initial={{pathLength: 0, pathOffset: 1}}
                            d="m 295.26411,267.95352 h -43.392 v 99.648 h -37.44 v -99.648 h -43.392 v -34.752 h 124.224 z"
                            style={{fontFamily: "Melbourne Bold", fillOpacity: 0, stroke: "#ffffff"}}
                            id="path7067"/>
                        <motion.path
                            className="n1"
                            initial={{pathLength: 1.1, pathOffset: 1}}
                            d="m 347.4882,233.20152 52.416,73.92 v -73.92 h 36.672 v 134.4 h -35.328 l -53.568,-73.728 v 73.728 h -36.672 v -134.4 z"
                            style={{fontFamily: "Melbourne Bold", fillOpacity: 0, stroke: "#ffffff"}}
                            id="path7069"/>
                        <motion.path
                            className="n2"
                            initial={{pathLength: 1.1, pathOffset: 1}}
                            d="m 347.4882,233.20152 52.416,73.92 v -73.92 h 36.672 v 134.4 h -35.328 l -53.568,-73.728 v 73.728 h -36.672 v -134.4 z"
                            style={{fontFamily: "Melbourne Bold", fillOpacity: 0, stroke: "#ffffff"}}
                            id="path7069"/>
                    </g>
                </g>
            </svg>
        </div>
    );
}