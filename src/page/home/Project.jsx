import React, { useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import { project } from "../../resource/Project";

const Project = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div>
      <SectionTitle title=" Project" />
      <div className="grid grid-cols-3 gap-10">
        {project.map((item) => (
          <div
            className={`border border-tertiary p-5 hover:shadow-md cursor-pointer ${
              selectedItem === item.id ? "bg-primary" : ""
            }`}
            onClick={() => setSelectedItem(item.id)}
          >
            <h1 className="text-tertiary font-semibold">{item.title}</h1>
            <p className="text-white">{item.description}</p>
            <a href={item.link}>
                <button className="bg-green-800 text-white py-2 px-5 rounded-md">
                  View Project
                </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
