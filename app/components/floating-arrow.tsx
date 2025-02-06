import {motion} from "motion/react";

export default function FloatingArrow() {
    return (
        <motion.div
            initial={{
                translateY: 0,
            }}
            animate={{
                translateY: [0, 10],
            }}
            transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: 'reverse'
            }}
            whileHover={{
                translateY: 0,
            }}
            className="text-xl font-bold text-center fixed bottom-0 left-0 right-0 pb-8 flex items-center justify-center cursor-pointer"
            onClick={() => {
                const currentScroll = window.scrollY;

                window.scrollTo({top: currentScroll + window.innerHeight, behavior: 'smooth'});
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="m12 22l-7-7l1.4-1.425l4.6 4.6V11h2v7.175l4.6-4.575L19 15zM11 9V6h2v3zm0-5V2h2v2z"/>
            </svg>
        </motion.div>
    )
}