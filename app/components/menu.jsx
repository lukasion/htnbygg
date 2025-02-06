import {motion} from "motion/react";
import React from "react";

export default function Menu({tilby}) {
    return (
        <div
            className="menu__background fixed top-0 left-0 right-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] backdrop-blur-md">
            <motion.div
                className="flex items-center flex-col sm:flex-row py-2 pt-4"
                initial={{gap: "0px 0.5rem"}}
                animate={{gap: "0px 3.5rem"}}
                transition={{duration: 0.6, delay: 2}}
            >
                <a
                    className="font-semibold uppercase text-lg md:text-2xl py-2 text-center tracking-widest block hover:border-b-3 border-transparent hover:border-white cursor-pointer border-b-4 transition-colors duration-300"
                    onClick={() => {
                        window.scrollTo({top: 0, behavior: 'smooth'});
                    }}
                >
                    Om oss
                </a>
                <a
                    className="font-semibold uppercase text-lg md:text-2xl py-2 text-center tracking-widest block hover:border-b-3 border-transparent hover:border-white cursor-pointer border-b-4 transition-colors duration-300"
                    onClick={() => {
                        const offset = 100
                        const target = tilby.current?.offsetTop;
                        if (target) {
                            window.scrollTo({top: target - offset, behavior: 'smooth'});
                        }
                    }}
                >
                    Tilby
                </a>
                <a
                    className="font-semibold uppercase text-lg md:text-2xl py-2 text-center tracking-widest block hover:border-b-3 border-transparent hover:border-white cursor-pointer border-b-4 transition-colors duration-300"
                    href="#"
                >
                    Kontakt
                </a>
            </motion.div>
        </div>
    )
}