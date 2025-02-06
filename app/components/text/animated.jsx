import {motion} from "motion/react";

const TextAnimated = (props) => {
    const {duration = 0.6, delay = 0.5, tag = 'p', children, ...rest} = props;
    const CustomTag = motion[tag];

    return (
        <CustomTag
            initial={{translateY: '100%'}}
            transition={{duration: duration, delay: delay}}
            whileInView={{translateY: 0}}
            viewport={{once: true}}
            {...rest}
        >
            {children}
        </CustomTag>
    )
}
export default TextAnimated;