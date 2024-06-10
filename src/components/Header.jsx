import React from "react";
import {AiOutlineMenu} from "react-icons/ai"

const Header = ({setMenuopen, menuOpen}) => {
    return (
    <>
        <nav>
            <NavContent />
        </nav>
        <button className="navBtn" onClick={()=>setMenuopen(!(menuOpen))}>
            <AiOutlineMenu/>
        </button>
    </>
    );
   
}

export const HeaderPhone = ({menuOpen, setMenuopen}) => {
    return (
      <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
          <NavContent  setMenuopen={setMenuopen}/>
      </div>
    )
  }

export const NavContent = ({setMenuopen, menuOpen}) => {
    return <>
    <h2>Ashish Singh</h2>
    <div>
        <a onClick={()=>setMenuopen(false)} href = "#home"> Home</a>
        <a onClick={()=>setMenuopen(false)} href = "#work">Work</a>
        <a onClick={()=>setMenuopen(false)} href = "#timeline">Experience</a>
        <a onClick={()=>setMenuopen(false)} href = "#services">Services</a>
        {/* <a href = "#testimonial">Testimonials</a> */}
        <a onClick={()=>setMenuopen(false)} href = "#contact">Contact</a>
    </div>
    <a href="mailto:rajs02073@gmail.com">
        <button>Send Mail</button>
    </a>
    
    </>
}
export default Header;


