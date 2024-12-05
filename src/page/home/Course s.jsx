import React from "react";
import SectionTitle from "../../component/SectionTitle";
import { Course } from "../../resource/Course.jsx";

const Courses = () => {
  return (
    <>
      <div className="
      flex flex-col gap-10 items-center
      ">
        <SectionTitle title="Course" />
        <div className="flex flex-wrap gap-10 mb-5">
          {Course.map((course) => (
            <div className="border border-tertiary py-3 px-5 ">
              <h1 className="text-green-400">{course.title}</h1>
              <p>{course.description}</p>
              <img className="gap-10 mb-10" src={course.image} alt="" />
          
              <div className=" gap-10">
                <a className="gap-10" href={course.link}>
                  <button className="text-white bg-green-800 px-10 py-2 rounded-md gap-4">
                    View Course
                  </button>
                </a>
              </div>
              </div>
          
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
