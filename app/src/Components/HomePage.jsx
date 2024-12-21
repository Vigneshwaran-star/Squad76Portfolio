
import { useEffect, useState } from 'react';

import  Moon  from '../Components/Moon.jsx';

import  Sun from '../Components/Sun.jsx';
import { useScroll,motion,useSpring,useTransform} from "framer-motion";
function HomePage  ()  {
  const [darkMode ,setDarkmode]=useState(false);
  const switchMode=()=>{
    setDarkmode(!darkMode)
  }
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode") === "true";
    if (darkMode === undefined) {
        setDarkmode(storedMode);
    } else if (darkMode) {
        localStorage.setItem("darkMode", "true");
        window.document.documentElement.classList.add("dark");
    } else {
        localStorage.setItem("darkMode", "false");
        window.document.documentElement.classList.remove("dark");
    }
}, [darkMode]);

  const {scrollYProgress }=useScroll();
  const scaleX=useSpring(scrollYProgress);
  const background=useTransform(scrollYProgress,[0,1],["rgb(100,100,100)","rgb(0,0,0)"])
  return (
    <>
       <motion.div className="div z-50 " style={{
      scaleX,
      transformOrigin:"left",
      background,
      position:"sticky",
      top:0,
      width:"100%",
      height:"5px",
     }}>
</motion.div>
    <header className='flex justify-between  w-full sticky top-0 dark:bg-black'>
    <img src="/images/squadlogo.png" alt="Logo" className="h-12 w-auto cursor-pointer" />

       <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}} className="contact w-32 h-12 border-2 border-slate-500 hover:bg-black hover:text-white rounded-full absolute ml-[1650px] ">
         Contact
       </motion.button>

    <div className="flex space-x-4 ">
         <a href="#About" className="About">About</a>
         <a href="#members" className="Members">Members</a>
         <a href="#experience" className="Experiences">Experiences</a>
         </div>
      <div className='transition cursor-pointer hover:to-blue-600 ' onClick={switchMode} >
        {!darkMode ? (
          <Moon className='w-[20px] h-[20px]' />
          
        ):(
          <Sun className='w-[20px] h-[20px]' />
        )}
      </div>
    </header>

    {/* <audio src="/audio/mwmories.mp3" autoPlay   className='w-40 '></audio> */}


  
       {/* <img src={moon} className='w-14 h-14 cursor-pointer p-2 rounded-full hover:bg-slate-200' alt=""/> */}
       
       </>
  )
}
export default HomePage;