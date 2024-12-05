import React, { useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import { experiences } from "../../resource/Exprince";

const Expricence = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <SectionTitle title="Experiences" />
      <div className="flex">
        <div className="flex flex-col gap-5">
          {experiences.map((experience, index) => (
            <div key={index} className="flex gap-10 p-5">
              <h1 className="text-tertiary">{experience.company}</h1>
              <h1 className="text-secondary">{experience.position}</h1>
              <h1 className="text-gray-500">{experience.duration}</h1>
              <p className="text-gray-400">{experience.description}</p>
              <button
                className={`w-full px-5 py-3 ${
                  selected === index && "bg-green-400"
                } text-white font-semibold hover:bg-green-500 transition duration-300`}
                onClick={() => setSelected(index)}
              >
                {selected === index ? "Selected" : "View Details"}
              </button>
            </div>
          ))}
        </div>
        {selected !== null && (
          <div className="flex flex-col gap-10 p-5">
            <h1 className="text-tertiary">{experiences[selected].company}</h1>
            <h1 className="text-secondary">{experiences[selected].position}</h1>
            <h1 className="text-gray-500">{experiences[selected].duration}</h1>
            <p className="text-gray-400">{experiences[selected].description}</p>
            <button
              className="w-full px-5 py-3 bg-gray-500 text-white font-semibold hover:bg-gray-600 transition duration-300"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Expricence;
