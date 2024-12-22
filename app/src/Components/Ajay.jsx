
import {  motion, useScroll, useSpring, useTransform } from 'framer-motion';


const Ajay = () => {
     const darkmode =localStorage.getItem("darkMode")==="true"
  const name = "I'm Ajay";
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(scrollYProgress, [0, 1], ['rgb(100,100,100)', 'rgb(0,0,0)']);
  return (
    <>
    <div className='dark:bg-black dark:text-white'>
      <motion.div
        className="div  z-50"
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
      <div className='flex dark:bg-black'>
        <div>
          <motion.div className='bg-black w-[500px] h-1 mt-10 dark:bg-white' initial={{ x: -150 }} animate={{ x: 0 }} transition={{ type: "spring", delay: .2, duration: .9 }}></motion.div>
          <motion.div className='bg-black w-1 h-[200px] ml-10 absolute top-0 left-0  dark:bg-white' initial={{ y: -150 }} animate={{ y: 0 }} transition={{ type: "spring", delay: .2, duration: .9 }}></motion.div>
          
          <h1 className='ml-52 mt-40 text-3xl font-bold'>{name === "" ? "Upcoming soon" : name}</h1>
          <h1 className='ml-52 mt-1 text-3xl font-bold text-red-600'>Program mentor</h1>
          <h1 className='ml-52 text-1xl mt-7 text-gray-700 dark:text-white'>
          He guides aspiring individuals, fostering growth and creativity through mentorship and <br /> innovative approaches
          </h1>
          <div className='ml-52 bg-white h-18 w-28 border mt-5 p-2 border-gray-700 hover:scale-105 dark:bg-black ' >
            Contact me!!
          </div>
        </div>
        <img src={darkmode?"/images/Ajay.png":"/images/Ajay2.png"} alt="Profile" className='absolute ml-[900px]' />
        <div className='absolute bg-white h-8 w-[300px] border mt-[590px] ml-[1000px] border-gray-700 pt-1 flex dark:bg-black dark:border-white'>
          <div className='w-4 h-4 bg-red-500 absolute mt-1'></div>
          <div className='pl-5 '>Currently working at Kalvium</div>
        </div>
      </div>

      {/* second page */}
      <div className=''>
        <div className='h-[80px] w-[600px] bg-[#F6FAFF] mt-[300px] ml-[380px] flex border-2 border-black dark:bg-black dark:border-white'>
          <h1 className='ml-5 mt-3 font-semibold'>
            “Access to computers and the Internet has become a basic need for education in our
            society.”
          </h1>
        </div>
        <div className='h-[40px] w-[150px] bg-white ml-[830px] border-2 border-black mb-2 font-semibold dark:border-white dark:bg-black'>
          - Kent Conrad
        </div>
      </div>

      <div className='mt-[150px] ml-[210px] font-bold text-[30px] text-red-600'>
        <div className='h-1 w-[100px] text-red-600'></div>
        <h1 className='absolute pl-7 text-black dark:text-white'>Skills</h1>#
      </div>

      <img src={darkmode?"/images/skill-removebg-preview 1.png":"/images/skill-removebg-preview 1(1).png"} alt="Skills" className='absolute ml-16' />

      <div className="flex justify-center mt-28 ml-96 gap-6">
        <table className="border-collapse border border-gray-300 dark:border-white ">
          <thead>
            <tr>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-5 py-2 bg-white dark:text-white dark:bg-black dark:border-white">Interpersonal Skills • Problem Solving • Teamwork • Leadership 
              • Stakeholder Management</td>
            </tr>
          </tbody>
        </table>

      

     
      </div>

      <div className='flex mt-[140px] ml-[200px] '>
        <h1 className='text-[30px] font-bold text-red-600'>#</h1>
        <h1 className='text-[30px] font-bold' >about-me</h1>
        <h1 className='mt-[60px] absolute '>Hello, I am Ajay!</h1>
        <h1 className='mt-[100px] absolute h-[400px] w-[500px]'>

        Hi, I am Ajay Balasubramaniam. With a strong background in business management and expertise in marketing, communication, and branding, I currently work as a Program Manager at a leading tech company in India. My journey includes roles in business development and fitness center management, supported by an HND and dual BSc degrees in Business Management, along with an MBA from Solent University, UK. Skilled in stakeholder management, project leadership, and customer relationship strategies, I am passionate about driving innovation and success in my organization.
</h1>    
        <img src={darkmode?"/images/about-me 2.png":"/images/about-me 2(1).png"} className="flex pl-[500px] pt-10 " alt="" />

      </div>

  
      <div className=' flex space-x-11  '>

        <img src="/images/chat.png" alt="" className='mt-[300px] ' />
      <div className='flex mt-[380px] dark:bg-black'>
        <h1 className='text-[30px] font-bold text-red-600 dark:bg-black'>#</h1>
        <h1 className='text-[30px] font-bold  dark:text-white ' >Contact me!!</h1>
        <h1 className='mt-[60px] absolute dark:bg-black dark:text-white'>Hello, I am Ajay!</h1>
        <h1 className='mt-[100px] absolute dark:bg-black dark:text-white'>

          I am interested in freelance opportunities. However, if you have other request or question, do not hesitate to contact me </h1>


      </div>
      </div>
      <div className='p-[100px]'></div>


                </div>

    </>
  );
};

export default Ajay;
