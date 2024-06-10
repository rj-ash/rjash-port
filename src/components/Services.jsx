import {motion} from "framer-motion";
import {AiFillIeCircle} from "react-icons/ai"
import { FaGuitar } from "react-icons/fa";
import { MdVideoCameraBack } from "react-icons/md";

const Services = () => {

const animation = {
whileInView: {x:0, y:0, opacity:1},
one: {x: "-100%", opacity:0},
two: {y: "-100%", opacity:0},
three: {y: "-100%", opacity:0},
four: {x: "100%", opacity:0},
delay: {duration: .6}, 
delay2: {duration: .7}
}

    return (
        <div id="services">
            <h2>Services</h2>
            <section>
                <motion.div id="serviceBox1" whileInView={animation.whileInView} initial={animation.one} transition={animation.delay}>
                    <h3>+2</h3>
                    <p>Years Experience</p>
                </motion.div>
                <motion.div id="serviceBox2" whileInView={animation.whileInView} initial={animation.four} transition={animation.delay}>
                <FaGuitar/>
                    <span>Stage Performance</span>
                </motion.div>
                <motion.div id="serviceBox3" whileInView={animation.whileInView} initial={animation.three} transition={animation.delay2}>
                <MdVideoCameraBack />
                    <span>Video Editing</span>
                </motion.div>
                <motion.div id="serviceBox4" whileInView={animation.whileInView} initial={animation.two} transition={animation.delay2}>
                    <AiFillIeCircle/>
                    <span>Web Development</span>
                </motion.div>


            </section>
        </div>
    )
}








export default Services;