
import ShuffleHero from './ShuffleHero.jsx';
import ShuffleHero1 from './ShuffleHero1.jsx';
import ShuffleHero2 from './ShuffleHero2.jsx';
import {  motion,  useScroll, useSpring, useTransform } from 'framer-motion';
const Memories = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(scrollYProgress, [0, 1], ['rgb(100,100,100)', 'rgb(0,0,0)']);

  return (
    

   <>


    <motion.div
        className="div z-50"
        style={{
          scaleX,
          transformOrigin: 'left',
          background,
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '5px',
         
        }}
      ></motion.div>
   


     <motion.div className='bg-black w-[500px] h-1 mt-10 absolute' initial={{ x: -150 }} animate={{ x: 0 }} transition={{ type: "spring", delay: .2, duration: .9 }}></motion.div>
    <motion.div className='bg-black w-1 h-[200px] ml-10 absolute top-0 left-0' initial={{ y: -150 }} animate={{ y: 0 }} transition={{ type: "spring", delay: .2, duration: .9 }}></motion.div>

     <ShuffleHero/>
     <div className='pt-[130px]'>
     <ShuffleHero1/>
     </div>
     <div className='pt-[130px]'>
     <ShuffleHero2/>
     </div>
  </>
  )
}

export default Memories