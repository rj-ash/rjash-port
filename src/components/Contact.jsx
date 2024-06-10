import { useState } from "react";
import vg from "../assets/vg.png";
import { motion} from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-hot-toast";



const Contact = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [disableBtn, setDisableBtn] = useState(false);
    

        const submitHandler = async(e) => {
            e.preventDefault();
            setDisableBtn(true); 
            try {
                console.log(name, email, message);
            await addDoc(collection(db, "contact"),{
                name, email, message
            })
            toast.success("Message Sent")
            setDisableBtn(false);          
            } catch (error) {
                toast.error("Error");
                console.log(error);  
                setDisableBtn(false);      
            }
            setName("");
            setEmail("");
            setMessage(""); 

        }
        const animations = {
            form: {initial: {opacity: 0, x: "-100%"},
                  whileInView:{opacity:1, x:"0"},
                  transition: {dalay: 1.5}
            },
            button: {initial: {opacity: 0, y: "-100%"},
                    whileInView:{opacity:1, y:0},
                    transition: {dalay: 2}
            },    
        }
    


    return(
        <div id="contact">
            <section>
                <motion.form {...animations.form}  onSubmit={submitHandler}>
                    <h2>Contact me</h2>
                    <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}  required />
                    <input type="text" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}  required />
                    <motion.button disabled = {disableBtn} className={disableBtn? "disableBtn": ""} {...animations.button} type="submit">Send</motion.button>
                </motion.form>
            </section>
            <aside>
                <img src={vg} alt="Graphics" />
            </aside>
        </div>
    )
}
export default Contact


