import  { useState } from 'react';
import { motion } from 'framer-motion';

const LogoFlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-[900px] h-[600px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      
    >
      <motion.div 
        className="relative w-full h-full transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          duration: 0.6, 
          type: "tween" 
        }}
      >
        {/* Front of Card - Squad 76 Image */}
        <div 
          className={`absolute w-full h-full backface-hidden 
            rounded-xl shadow-lg overflow-hidden
            bg-[#E8E5DB] flex items-center justify-center
            ${!isFlipped ? 'z-10' : 'z-0'}`}
        >
          <img 
            src="/images/new-removebg-preview 1.png" 
            alt="Squad 76" 
            className="max-w-full h-full object-contain rotate-y-180"
          />
        </div>

        {/* Back of Card - Kalvium Logo */}
        <div 
          className={`absolute w-full h-full backface-hidden  
            bg-[#E8E5DB] rounded-xl shadow-lg
            flex items-center justify-center
            ${isFlipped ? 'z-10' : 'z-0'}`}
        >
          <img 
            src="/images/Group 51 (1).png" 
            alt="Kalvium" 
            className="max-w-full max-h-full object-contain p-6"
          />
          <h1 className='' ></h1>
        </div>
      </motion.div>
    </div>
  );
};

export default LogoFlipCard;