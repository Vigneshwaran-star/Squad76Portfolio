
import { useEffect, useState } from 'react';

import  Moon  from '../Components/Moon.jsx';
import LogoFlipCard from './LogoFlipCard.jsx';

import  Sun from '../Components/Sun.jsx';
import { useScroll,motion,useSpring,useTransform,AnimatePresence} from "framer-motion";
import MemberCards from './MemberCards.jsx';
// import Sibishree from './Sibishree.jsx';
import { Link } from 'react-router';
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
    <nav className='flex justify-between  w-full sticky top-0  border-b-2 border-black bg-white dark:bg-black dark:border-white p-4 z-50'>
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

    

    <div className="heading bg-white w-full h-auto z-30 flex justify-center space-x-4 mt-0 dark:bg-black  ">
        <AnimatePresence>
          {/* conditinal should be presented for the exit to work */}
          <motion.h1 className="text-[72.5px] font-normal text-black  pr-8 dark:text-white mt-40"  initial={{x:-1000} } animate={{x:0}} exit={{x:-250}} transition={{type:"spring",duration:.5,delay:0.5,ease:"easeInOut"}}>Squad 76</motion.h1></AnimatePresence>

          <img src="/images/brain.png" className="w-[74px] h-[76px] mt-[175px]" alt="brain" />

          <motion.img src={ !darkMode ?"/images/toothwheel.png" : "/images/toothwheel(1).png"} className="w-[88px] h-[91px] mt-44 dark:w-[80px] dark:h-[80px] z-30" alt="" initial={{x:1000}} animate={{x:0}} whileHover={{rotate:"180deg"}} transition={{repeat:1,x:{duration:0.3,delay:0.5,type:"spring",ease:"easeInOut"},rotate:{duration:0.3,delay:.3}}} />
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
            {/* Mentors imges with their githublink and linked link */}
           <div className="flex w-full bg-white justify-center space-x-40 dark:bg-black pt-40 ">
            
           <div className="w-[300px] h-[300px] relative bg-[#E8E5DA] rounded-lg">
            <h1 className='font-semibold flex text-[35px] justify-center'>Ajay</h1>
            <div className='flex flex-col absolute top-0 right-4 items-center space-y-4'>
            <img src="/images/Line 10 (Stroke).png" className='w-1 h-40 ' alt="" />
            <a href=""><img src="/images/Github (1).png" className='p-2 rounded-full w-10 h-10  bg-black  hover:scale-110' alt="" />
            </a>
            <a href="https://www.linkedin.com/in/ajay-balasubramaniam1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/images/Linkedin (1).png" className="p-2 rounded-lg h-10 w-10 bg-black hover:scale-110" alt="" /></a>
            
            </div>
          <Link to={'/ajay'}>
            <div className="absolute bottom-0 w-[200px] h-[250px] left-0">
              <img src={darkMode?"/images/Ajay2.png":"/images/Ajay.png"} className='w-full h-full' alt="" />
            </div></Link>
            </div>
            
           <div className="w-[300px] h-[300px] relative bg-[#E8E5DA] rounded-lg">
           <h1 className='font-semibold flex text-[35px] justify-center'>Sibishree</h1>
            <div className='flex flex-col absolute top-0 right-4 items-center space-y-4'>
            <img src="/images/Line 10 (Stroke).png" className='w-1 h-40 ' alt="" />
            <a href=""><img src="/images/Github (1).png" className='p-2 rounded-full w-10 h-10  bg-black hover:scale-110' alt="" />
            </a>
            <a href="https://www.linkedin.com/in/sibishree-maragathavel-a6b76825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/images/Linkedin (1).png" className="p-2 rounded-lg h-10 w-10 bg-black hover:scale-110" alt="" /></a>
            
            </div>
          <Link to={'/sibishree'}>
            <div className="absolute bottom-0 w-[200px] h-[250px] left-0">
              <img src={darkMode?"/images/sibishreeimage-removebg-preview(1).png":"/images/sibishreeimage-removebg-preview.png"} className='w-full h-full' alt="" />
            </div></Link>
            </div>


           </div>
<MemberCards className="z-10"/>
<div id="About" className="aboutUs bg-white  w-full grid-cols-1 pt-32 justify-center dark:bg-black dark:text-white">
          
          <h1 className="text-[65.53px] flex justify-center font-sans">About us</h1>
        
        <div className="flex w-full justify-center">
          <motion.h1 initial={{opacity:0}} whileInView={{opacity:0.6}} transition={{delay:.3, type:"tween"  }} className="text-[22px] font-bold opacity-60 w-[716px] h-[272px] p-4">We are Squad 76 of Kalvium Direct-Campus—first-year learners passionate about full-stack development, programming, and innovation. Aspiring to become entrepreneurs and tech pioneers, we aim to create impactful solutions and drive a new wave of technological revolution. Together, we’re building skills, fostering creativity, and shaping the future of tech.</motion.h1>
        </div>

      </div>
      <div className='flex justify-center dark:bg-black'>

      <LogoFlipCard/>
      </div>

      <div className="experiences w-full flex-col justify-center dark:bg-black dark:text-white  ">
            <h1 className="text-[63px] flex justify-center " id="experience">Our Experiences</h1>
            <p className="text-[24px] flex justify-center mt-[40px] opacity-60" >Explore the stories, memories, and </p>
            <p className="text-[24px] flex justify-center opacity-60">triumphs that make our squad the best</p>
          </div>
<div className='dark:bg-black '>
          <div className="memoprojects flex justify-center space-x-40 pt-44   ">
              <Link to={'/memories'}>
            <motion.button whileTap={{scale:.95}} className="flex w-[371px] h-[501px] border-2 border-black rounded-lg relative flex-shrink space-x-10 flex-wrap shadow-2xl shadow-black drop-shadow-lg dark:bg-white">
              <h1 className="text-[70px] left-4 absolute bottom-44 flex-wrap font-merienda">Memories</h1>
            </motion.button></Link>
            <motion.button whileTap={{scale:.95}} className="flex w-[371px] h-[501px] border-2 border-black rounded-lg relative shadow-2xl drop-shadow-2xl shadow-black dark:bg-white ">
              <h1 className="text-[70px] absolute bottom-44 left-4 font-rubikGlitch">Projects</h1>
            </motion.button>
          </div>
          </div>
          <div className="footer w-full flex flex-col space-y-4 pt-10 dark:bg-black">
    <img src="/images/Line 10 (Stroke).png" className="h-1 w-full px-10" alt="" />
    <div className="flex space-x-10 px-10">
      <a href=""><img className="w-10 h-10" src="/images/insta.png" alt="" /></a>
      <a href=""><img className=" w-10 h-10" src="/images/mail.png" alt="" /></a>
      <a href=""><img className=" w-10 h-10" src="/images/Twitter.png" alt="" /></a>
    </div> </div>
       </>
  )
}
export default HomePage;