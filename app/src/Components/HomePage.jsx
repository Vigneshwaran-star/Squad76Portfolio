
import { useEffect, useState } from 'react';

import  Moon  from '../Components/Moon.jsx';

import  Sun from '../Components/Sun.jsx';
import { useScroll,motion,useSpring,useTransform,AnimatePresence} from "framer-motion";
function HomePage  ()  {
  // Implementing dark mode
  const [darkMode ,setDarkmode]=useState(false);     // setting initially darkmode as false
  const switchMode=()=>{
    // toggling darkmode
    setDarkmode(!darkMode)
  }
  useEffect(() => {
    // if darkmode is true adding html class to "dark"
   if (darkMode) {
        localStorage.setItem("darkMode", "true");
        window.document.documentElement.classList.add("dark");
    //  if darkMode is not true removing the dark class   
    } else {
        localStorage.setItem("darkMode", "false");
        window.document.documentElement.classList.remove("dark");
    }
}, [darkMode]);
  //  using useScroll we can show the scroll progress
  const {scrollYProgress }=useScroll();
  const scaleX=useSpring(scrollYProgress);
  // transforming the horizontal scroll from gray to black
  const background=useTransform(scrollYProgress,[0,1],["rgb(100,100,100)","rgb(0,0,0)"])
  return (
    <>
       <motion.div className="div z-50 " style={{
      scaleX,
      transformOrigin:"left", //which makes the scroll progress tranformation from left
      background,
      position:"sticky",
      top:0,
      width:"100%",
      height:"5px",
     }}>
</motion.div>
     {/* nav bar with sticky position which stays stilol when scrolling */}
    <nav className='flex justify-between  w-full sticky top-0  border-b-2 border-black bg-white dark:bg-black dark:border-white p-4'>
    <img src="/images/squadlogo.png" alt="Logo" className="h-12 w-auto cursor-pointer" />


    <div className="flex space-x-60 font-bold text-[20px] pt-3 dark:text-white">
         <a href="#About" className="About font-bold ">About</a>
         <a href="#members" className="Members">Members</a>
         <a href="#experience" className="Experiences">Experiences</a>
         </div>
       <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}} className="contact w-32 h-12 border-2 border-slate-500  hover:bg-black hover:text-white rounded-full dark:text-white dark:border-white ">
         Contact
       </motion.button>
       {/* toggling between sun and moon icon when changing the  theme */}
      <div className='transition cursor-pointer hover:to-blue-600 pt-3' onClick={switchMode} >
        {!darkMode ? (
          <Moon className='w-[20px] h-[20px]' />
          
        ):(
          <Sun className='w-[20px] h-[20px]' />
        )}
      </div>
    </nav>

    

    <div className="heading bg-white w-full h-auto z-40 flex justify-center space-x-4 mt-0 dark:bg-black ">
        <AnimatePresence>
          {/* conditinal should be presented for the exit to work */}
          <motion.h1 className="text-[72.5px] font-normal text-black  pr-8 dark:text-white mt-40"  initial={{x:-1000} } animate={{x:0}} exit={{x:-250}} transition={{type:"spring",duration:.5,delay:0.5,ease:"easeInOut"}}>Squad 76</motion.h1></AnimatePresence>

          <img src="/images/brain.png" className="w-[74px] h-[76px] mt-[175px]" alt="brain" />

          <motion.img src={ !darkMode ?"/images/toothwheel.png" : "/images/toothwheel(1).png"} className="w-[88px] h-[91px] mt-44 dark:w-[80px] dark:h-[80px]" alt="" initial={{x:1000}} animate={{x:0}} whileHover={{rotate:"180deg"}} transition={{repeat:1,x:{duration:0.3,delay:0.5,type:"spring",ease:"easeInOut"},rotate:{duration:0.3,delay:.3}}} />
        </div>
       
          {/* subheading with transitions */}
        <div className="subheading bg-white w-full z-40 flex-col pt-14  space-x-3 dark:bg-black">
          <div className="row1 flex justify-center">
            <h1 className="text-[84.1px] font-normal dark:text-white">Visual</h1>
            <motion.img initial={{y:-500}} animate={{y:0}} transition={{duration:0.3,delay:.3}} src={!darkMode?"/images/eyes.png":"/images/eyes(1).png"} className="w-[70px] h-[70px] " alt="" />
            <h1 className="text-[72.5px] font-normal dark:text-white">Experiences</h1>
          </div>
         
          <div className="row2 flex justify-center">
            <motion.img initial={{x:-1000}} animate={{x:0}} transition={{type:"spring",duration:1,delay:0.7}} src={!darkMode?"/images/line.png":"/images/line(1).png"} className="w-[238px] h-[8px] " alt="" />
            <h1 className="text-[84.1px] font-normal dark:text-white">of our Squad</h1>
            <motion.img initial={{x:1000}} animate={{x:0}} transition={{type:"spring",duration:1,delay:0.7}} src={!darkMode?"/images/line.png":"/images/line(1).png"} className="w-[238px] h-[8px] " alt="" />
          </div>
          </div>
      
       
       </>
  )
}
export default HomePage;