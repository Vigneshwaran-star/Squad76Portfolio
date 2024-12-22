
import {  motion,  useScroll, useSpring, useTransform } from 'framer-motion';


const  Sibishree= () => {
  const name = "I'm Sibisree";
  const darkmode =localStorage.getItem("darkMode")==="true";
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(scrollYProgress, [0, 1], ['rgb(100,100,100)', 'rgb(0,0,0)']);
  return (
    <>
    <div className='dark:bg-black'>
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
      <div className='flex dark:bg-black dark:text-white'>
        <div className=' dark:bg-black'>
          <motion.div className='bg-black w-[500px] h-1 mt-10' initial={{ x: -150 }} animate={{ x: 0 }} transition={{ type: "spring", delay: .2, duration: .9 }}></motion.div>
          <motion.div className='bg-black w-1 h-[200px] ml-10 absolute top-0 left-0' initial={{ y: -150 }} animate={{ y: 0 }} transition={{ type: "spring", delay: .2, duration: .9 }}></motion.div>
          
          <h1 className='ml-52 mt-40 text-3xl font-bold dark:text-white'>{name === "" ? "Upcoming soon" : name}</h1>
          <h1 className='ml-52 mt-1 text-3xl font-bold text-red-600  dark:text-white'>technical mentor</h1>
          <h1 className='ml-52 text-1xl mt-7 text-gray-700  dark:text-white'>
            He crafts responsive websites where technologies <br /> meet creativity
          </h1>
          <div className='ml-52 bg-white h-18 w-28 border mt-5 p-2 border-gray-700 hover:scale-105  dark:text-white dark:bg-black' >
            Contact me!!
          </div>
        </div>
        <img src={darkmode?"/images/sibishreeimage-removebg-preview.png":"/images/sibishreeimage-removebg-preview(1).png"} alt="Profile" className='absolute ml-[900px]' />
        <div className='absolute bg-white h-8 w-[300px] border mt-[590px] ml-[1000px] border-gray-700 pt-1 flex dark:bg-black'>
          <div className='w-4 h-4 bg-red-500 absolute mt-1'></div>
          <div className='ml-5  dark:text-white dark:bg-black'>Currently working at Kalvium</div>
        </div>
      </div>

      {/* second page */}
      <div >
        <div className='h-[80px] w-[600px] bg-[#F6FAFF] mt-[300px] ml-[380px] flex border-2 border-black dark:bg-black dark:border-white'>
          <h1 className='ml-5 mt-3 font-semibold  dark:text-white'>
            “Access to computers and the Internet has become a basic need for education in our
            society.”
          </h1>
        </div>
        <div className='h-[40px] w-[150px] bg-white ml-[830px] border-2 border-black mb-2 font-semibold  dark:text-white dark:bg-black dark:border-white'>
          - Kent Conrad
        </div>
      </div>

      <div className='mt-[150px] ml-[210px] font-bold text-[30px] text-red-600 dark:bg-black dark:text-white'>
        <div className='h-1 w-[100px] text-red-600 dark:bg-black'></div>#
        <h1 className='absolute pl-7   dark:text-white dark:bg-black'>Skills</h1>
      </div>

      <img src={darkmode?"/images/skill-removebg-preview 1.png":"/images/skill-removebg-preview 1(1).png"} alt="Skills" className='absolute ml-16 dark:bg-black' />

      <div className="flex justify-center mt-28 ml-96 gap-6 dark:bg-black">
        <table className="border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-black px-5 py-2 bg-white  dark:text-white dark:border-white dark:bg-black">Languages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-5 py-2 bg-white  dark:text-white dark:border-white dark:bg-black">Cpp, Python, JavaScript,java</td>
            </tr>
          </tbody>
        </table>

        <table className="border-collapse border border-gray-300 dark:border-white dark:bg-black">
          <thead>
            <tr>
              <th className="border border-black px-5 py-2 bg-white dark:border-white  dark:text-white dark:bg-black">Other</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-5 py-2 bg-white  dark:text-white dark:bg-black dark:border-white">Database Management System (DBMS) </td>
            </tr>
          </tbody>
        </table>

        <table className="border-collapse border border-gray-300 dark:bg-black dark:border-white">
          <thead>
            <tr>
              <th className="border border-black px-5 py-2 bg-white  dark:text-white dark:border-white dark:bg-black">Tools</th>
            </tr>
          </thead>
          <tbody className='dark:bg-black'>
            <tr >
              <td className="border border-black px-5 py-2 bg-white  dark:text-white dark:border-white dark:bg-black ">Vs code..</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <div className='flex mt-[140px] ml-[200px]  dark:bg-black'>
        <h1 className='text-[30px] font-bold text-red-600 '>#</h1>
        <h1 className='text-[30px] font-bold  dark:text-white' >about-me</h1>
        <hr></hr>
        <h1 className='mt-[60px] absolute  dark:text-white'>Hello, I am Sibisree!</h1>
        <h1 className='mt-[100px] absolute h-[400px] w-[500px] dark:text-white '>
I am Sibishree from Pudukkotai District, currently pursuing a B.E. in ECE at Sri Shakthi Institute of Engineering and Technology. I am skilled in Java, OOP, DBMS, networking, C, HTML, and CSS.

I developed a Bus Reserving Management System using Java, OOP principles, and JDBC to record customer bookings.

My hobbies include drawing, dancing, and traveling. I aim to secure a position in a reputed company and grow into a prominent role.

</h1>
        <img src={darkmode?"/images/about-me 2.png":"/images/about-me 2(1).png"} className="flex pl-[500px] pt-10 " alt="" />

      </div>

      <div className='flex  ml-[200px] mt-[400px]  dark:bg-black'>
        <h1 className='text-[30px] font-bold text-red-600'>#</h1>
        <h1 className='text-[30px] font-bold  dark:text-white' >projects</h1>
      


      
       <h1 className='mt-[100px] ml-[100px] absolute text-[30px] font-semibold  dark:text-white'>
          Coming soon  
         
       </h1>
       


      </div>


       
      <div className=' flex space-x-11  '>

        <img src="/images/chat.png" alt="" className='mt-[300px] ' />
      <div className='flex mt-[380px] dark:bg-black'>
        <h1 className='text-[30px] font-bold text-red-600 dark:bg-black'>#</h1>
        <h1 className='text-[30px] font-bold  dark:text-white ' >Contact me!!</h1>
        <h1 className='mt-[60px] absolute dark:bg-black dark:text-white'>Hello, I am Sibishree!</h1>
        <h1 className='mt-[100px] absolute dark:bg-black dark:text-white'>

          I am interested in freelance opportunities. However, if you have other request or question, do not hesitate to contact me </h1>


      </div>
      </div>

      <div className='p-[100px]'></div>

     </div>


    </>
  );
};

export default Sibishree;