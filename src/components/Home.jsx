import React, { useRef } from "react";
import {animate, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import { IoMdMail } from "react-icons/io";
import { GiGuitar } from "react-icons/gi";
import { FaVideo } from "react-icons/fa";
import me_circle from "../assets/me_circle.png"



const Home = () => {


    const animation = {
        whileInView: {x: 0, opacity: 1},
        initial: {x:"-100%", opacity:0}
    }

    const clientContent = useRef();
    const animateClientContent = () => {
        animate(0, 50, {
            duration:1, 
            onUpdate: (v) => (clientContent.current.textContent = v.toFixed()),
        })
    }

    const projectContent = useRef();
    const animateProjectContent = () => {
        animate(0, 200, {
            duration:1, 
            onUpdate: (x) => (projectContent.current.textContent = x.toFixed()),
        })
    }

    return(
       <div id = "home">
        <section>
            <div>
                <motion.h1 whileInView={animation.whileInView} initial = {animation.initial}>
                    Hii, I m <br/> Ashish Singh
                </motion.h1>
                <Typewriter options={{strings: ["An IITian","A developer", "A Video Editor", "A Singer & Guitarist"],
                typeSpeed:10,
                delay: 50,
                autoStart: true, 
                loop: true, 
                cursor: "",
                wrapperClassName: "typewritterpara"}}/>

                <div>
                <a href="https://mega.nz/folder/JWkkjITb#R6icyv9ACX66lP126l4Neg" target="_blank" rel="noopener noreferrer"><GiGuitar className="guitar-icon"/>Musical Performance</a>
                <a href="https://drive.google.com/drive/folders/1h7Y1HMnIwwMa9Cm-r6xyCIV_xPuKNv40?usp=sharing" target="_blank" rel="noopener noreferrer"><FaVideo className="vid-icon"/>Video Projects</a>
                </div>
                <aside>
                    <article>
                        <p>
                            +<motion.span ref={projectContent} whileInView={animateProjectContent}></motion.span>
                        </p>
                        <span>Projects made</span>
                    </article>
                    <article>
                    <p>
                        +<motion.span ref={clientContent} whileInView={animateClientContent}></motion.span>
                    </p>
                    <span>Clients Worldwide</span>
                </article>
                   
                </aside>
                <article data-special>  {/*using this data-special attribute, we can access them inside css*/}
                        <div><IoMdMail id="maillogo"/>Contact</div>
                        <span>rajs02073@gmail.com</span>
                    </article>

               

               
            </div>
        </section>

        <section id="s2">
            <img src={me_circle} alt="Ashish" ></img>
            <div className="image"></div>
        </section>


       </div>
    )
}
export default Home;