import React, { useRef } from "react";
import {animate, motion} from "framer-motion";

export default function Project(){

    const noCount = useRef();

    const animateNoCount = () => {
    animate(0, 100,{
        duration:1,
        onUpdate: (v) => (noCount.current.textContent = v.toFixed())
    } )
}
    return(
            <p>+<motion.span ref={noCount} whileInView={animateNoCount}></motion.span></p>

    );
}


