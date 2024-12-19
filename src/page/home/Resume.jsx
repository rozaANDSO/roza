import React from "react";
import roza from "../../assets/roza.jpg";
import SectionTitle from "../../component/SectionTitle";
const Resume = () => {
  const about = {
    title: "About ME",
    description:
      "I am a passionate software engineer with a keen eye for detail and a strong foundation in JavaScript, ReactJS, and Node.js. My goal is to create innovative and user-friendly applications that enhance the lives of people around the world.I have a proven track record in delivering high-quality solutions and have been working on various projects, from small to large-scale, to help clients achieve their goals. My experience includes working with startups, mid-sized businesses, and large corporations",
    info: [
      {
        fieldName: "Roza",
        fieldValue: "Software Engineer",
      },
      {
        fieldName: "Address|",
        fieldValue: "Addis Ababa, Ethiopia",
      },

      {
        fieldName: "Email",
        fieldValue: "rozabelay112@gmail.com",
      },
      {
        fieldName: "Phone",
        fieldValue: "+0922887221",
      },
      {
        fieldName: "Github",
        fieldValue: "https://github.com/rozaANDSO",
      },
      {
        fieldName: "Linkedin",
        fieldValue: "https://www.linkedin.com/in/rozabelay/",
      },
      {
        fieldName: "Stack",
        fieldValue: "frontend, backend, fullstack ,Mern stack",
      },
      {
        fieldName: "Education",
        fieldValue:
          "BSc. Electrical and computer engineering, University of Addis Ababa",
      },
      {
        fieldName: "Experience",
        fieldValue: "Software Engineer at self Employed, 2020-Present",
      },
    ],
  };

  return (
    <>
      <div>
        <SectionTitle title="Resume" />
        <div className="flex flex-col gap-5">
          <img
            className="
            rounded-full
            object-cover
            h-[140px]
            "
            alt="roza belay"
            src={roza}
          />
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-2xl font-semibold text-black">
            {about.title}
          </h1>
          <p className="text-black">{about.description}</p>
          <h2 className="text-black text-4xl">Cover Letter:by </h2>
          <h1 className="text-5xl text-red-900">
            {about.info[0].fieldName}: {about.info[0].fieldValue}
          </h1>
          <p className="text-black">
            I am writing a letter of interest in regards to the position in your
            company. Your company is known for its innovation, professionalism,
            and results-driven marketing strategy, which is why I am certain I
            would make a valuable addition to your team. I would be interested
            in learning more about the company and available opportunities, so I
            have enclosed my resume for your consideration. I am confident that
            my experience in this field will be an asset to your company. As you
            will see on my resume, I have a proven record of achievements, which
            will allow me to make major contributions to your company. I look
            forward to speaking with you to discuss how my experience and
            abilities match your needs. I will call you on the day of the week
            to see what day and time fit your busy schedule. Don’t hesitate to
            contact me at your phone number or contact me by email at your email
            address should you have any questions. I look forward to speaking
          </p>
        </div>
        <div className="flex gap-5 mt-10">
          <h3 className="text-green-500 text-sm">Skills:</h3>
          <p className="text-green-700">{about.info[8].fieldValue}</p>
          <h3 className="text-green-500 text-sm">Education:</h3>
          <p className="text-green-700">{about.info[7].fieldValue}</p>
          <h3 className="text-green-500 text-sm">Experience:</h3>
          <p className="text-green-700">{about.info[6].fieldValue}</p>
          <h3 className="text-green-500 text-sm">Projects:</h3>
          <p className="text-green-700">
            self Employed- Software Engineer, 2020-Present
          </p>
          <h3 className="text-green-500 text-sm">Contact:</h3>
          <p className="text-green-700">{about.info[3].fieldValue}</p>
          <h3 className="text-green-500 text-sm">Language:</h3>
          <p className="text-green-700">English, Amharic</p>
          <h3 className="text-green-500 text-sm">Location:</h3>
          <p className="text-green-700">{about.info[2].fieldValue}</p>
        </div>
        <div className="flex gap-5 mt-10">
          <h3 className="text-green-500 text-sm">Email:</h3>
          <p className="text-green-700">{about.info[2].fieldValue}</p>
        </div>
        
    
      </div>
    </>
  );
}

export default Resume;
