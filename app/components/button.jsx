const Button = ({href, target, className, children}) => {
    return (
        <a className={'bg-white text-black font-semibold uppercase text-xs md:text-sm py-3 text-center tracking-widest inline-block border-2 hover:bg-transparent cursor-pointer transition-colors duration-300 px-8 border-white hover:text-white ' + className}
           href={href} target={target}>
            {children}
        </a>
    )
}

export default Button;