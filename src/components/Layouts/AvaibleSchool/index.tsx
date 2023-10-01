import React from "react";
import { FaUsers, FaUserFriends } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsFillBookmarkDashFill } from "react-icons/bs";

const AvaibleAtSchool = () => {
  return (
    <section className="text-light py-4 bg-semiDark">
      <div className="container mx-auto lg:px-32">
        <div className="w-full md:h-80 px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="w-full max-w-[9rem] h-[12rem] bg-primary rounded-2xl flex items-center justify-center flex-col md:-mt-[13%]">
              <FaUsers className="w-10 h-10 pb-2" />
              <h3 className="text-lg font-semibold py-1">1500 Student</h3>
              <p className="text-grey">Every Years</p>
            </div>
            <div className="w-full max-w-[9rem] h-[12rem] bg-primary rounded-2xl flex items-center justify-center flex-col md:-mt-[13%]">
              <GoHomeFill className="w-10 h-10 pb-2" />
              <h3 className="text-lg font-semibold py-1">29 Classrooms</h3>
              <p className="text-grey">For Now</p>
            </div>
            <div className="w-full max-w-[9rem] h-[12rem] bg-primary rounded-2xl flex items-center justify-center flex-col md:-mt-[13%]">
              <FaUserFriends className="w-10 h-10 pb-2" />
              <h3 className="text-lg font-semibold py-1">__ Teachers</h3>
              <p className="text-grey">This Year</p>
            </div>
            <div className="w-full max-w-[9rem] h-[12rem] bg-primary rounded-2xl flex items-center justify-center flex-col md:-mt-[13%]">
              <BsFillBookmarkDashFill className="w-10 h-10 pb-2" />
              <h3 className="text-lg font-semibold py-1">__ Courses</h3>
              <p className="text-grey">This Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvaibleAtSchool;
