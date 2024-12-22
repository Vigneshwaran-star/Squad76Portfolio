import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const MemberCards = () => {
  const [members, setMembers] = useState([]);
  const darkmode = localStorage.getItem("darkMode") === "true";

  useEffect(() => {
    const fetchMembersData = async () => {
      try {
        const response = await fetch("/database.json"); // Fetching from public folder
        const data = await response.json();
        console.log("Fetched Members Data:", data); 
        setMembers(data.members.slice(0, 24)); // Limit to 24 members
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMembersData();
  }, []);

  const firstRow = members.slice(0, 12);
  const secondRow = members.slice(12, 24);

  const MemberCard = ({ member }) => (
    <div className="mentors w-full bg-white h-96 flex justify-center space-x-8 dark:bg-black">
      <div className="*:w-[300px] h-[300px] p-2 bg-[#E8E5DB] rounded-lg shadow-md relative hover:scale-110">
        <h3 className="text-[30px] font-semibold mt-0 text-center">{member.name}</h3>
        <div className="*:w-[250px] h-[250px] absolute bottom-0 left-0">
          <img
            src={darkmode ? member.blackBgimg : member.whiteBgimg}
            alt={member.name}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col absolute top-0">
          <img
            className="w-1 h-40 absolute right-6"
            src="/images/Line 10 (Stroke).png"
            alt=""
          />
          <a href={member.github}>
            <img
              className="w-[45px] h-[45px] absolute p-2 right-1 bg-black rounded-full top-44 hover:scale-110"
              src="/images/Github (1).png"
              alt=""
            />
          </a>
          <a href={member.linkedin}>
            <img
              className="w-[40px] h-[40px] absolute p-2 right-2 bg-black rounded-xl hover:scale-110 top-60"
              src="/images/Linkedin (1).png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );

  const createInfiniteRow = (members) => {
    return [...members]; //  returning the row for seamless animation
  };

  return (
    <>
      <div className="w-full bg-white overflow-hidden py-10 group dark:bg-black">
        {/* Row 1 */}
        <div className="flex gap-8 animate-scroll-left group-hover:paused">
          {createInfiniteRow(firstRow).map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
        {/* Row 2 (Opposite Direction) */}
        <div className="flex gap-8 animate-scroll-right mt-24 group-hover:paused">
          {createInfiniteRow(secondRow).map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </>
  );
};

// import PropTypes from "prop-types";


// MemberCards.propTypes = {
//   member: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     github: PropTypes.string,
//     linkedin: PropTypes.string,
//     blackBgimg: PropTypes.string,
//     whiteBgimg: PropTypes.string,
//   }).isRequired,
// };

export default MemberCards;
