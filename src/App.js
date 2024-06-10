import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services"
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {Toaster} from "react-hot-toast";
import Testimonials from "./components/Testimonials";
import { useState } from "react";
// import NewTestimonial from "./components/NewTestimonial";


function App() {

  const [menuOpen, setMenuopen] = useState(false);
console.log(menuOpen);
  return (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuopen={setMenuopen}/>
    <Header menuOpen={menuOpen} setMenuopen={setMenuopen}/>
    <Home/>
    <Work/>
    <Timeline/>
    <Services/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
    <Toaster/>
    
    </>
  );
}

export default App;
