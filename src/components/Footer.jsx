import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai"


const Footer = () => {
    return(
        <div id="footer">
            
                <div>
                    <img src="https://media.licdn.com/dms/image/D4D03AQGlaFnBvsTs4A/profile-displayphoto-shrink_400_400/0/1672670102024?e=1713398400&v=beta&t=lz7NblfuxjLaFxocKJ9Uiw2uhxLYtMkNCyCZYdjyaaE" alt="" />
                    <h2>Ashish Singh</h2>
                    <p>IITian, Musician, Web developer, Video Editor</p>
                </div>
                <aside>
                    <h2>Social Media</h2>
                    <article>
                        <a target = {"_blank"} href="https://www.linkedin.com/in/ashish-singh-5310b3226/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BPFCfvXf3SyiV7MHr1h%2F1Jg%3D%3D"><AiFillLinkedin/></a>
                        <a target = {"_blank"} href="https://www.instagram.com/wakeup_ash_/"><AiFillInstagram/></a>
                        <a target = {"_blank"} href="https://github.com/rj-ash"><AiFillGithub/></a>
                    </article>
                    <a href="#home"> <AiOutlineArrowUp/> </a>
                </aside>
            
        </div>
    )
}

export default Footer