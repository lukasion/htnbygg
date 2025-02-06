import {motion} from "motion/react";

const TextAnimated = (props) => {
    const {duration = 0.6, delay = 0.5, tag = 'p', leftRight = false, children, ...rest} = props;
    const CustomTag = motion[tag];

    const initial = leftRight ? {
        translateX: '-100%',
    } : {
        translateY: '100%',
    }

    return (
        <CustomTag
            initial={initial}
            whileInView={{translateY: 0, translateX: 0}}
            transition={{duration: duration, delay: delay}}
            viewport={{once: true}}
            {...rest}
        >
            {children}
        </CustomTag>
    )
}
export default TextAnimated;