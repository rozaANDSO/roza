import React from 'react'
import SectionTitle from '../../component/SectionTitle'

const About = () => {
  const skills = [
    { name: 'JavaScript', percentage: 85 },
    { name: 'React JS', percentage: 80 },
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'Node JS', percentage: 80 },
    { name: 'Express JS', percentage: 75 },
    { name: 'MongoDB', percentage: 85 },
    { name: 'SQL', percentage: 80 },
    { name: 'Bootstrap', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 80 },
    { name: 'Next JS', percentage: 75 },
    { name: 'Docker', percentage: 85 },
    { name: 'AWS', percentage: 80 },
    { name: 'git', percentage: 80 },
    { name: 'Redux', percentage: 80 },
    { name: 'firebase', percentage: 80 },
  ]
  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex">
        <div className="h-[75vh] w-1/2">
          <lottie-player
            src="https://lottie.host/dde0ceac-f05d-481a-be2b-8a7a146fb6c5/95QGAKVeDV.json"
            background="##FFFFFF"
            speed="1"
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-black text-4xl font-semibold">
            Hi, I'm Roza Belay Tiruneh.
          </h1>
          <p className="text-black text-lg ">
            I'm a passionate and dedicated electrical and computer engineer with
            a keen eye for detail. I have a strong foundation in programming and
            a proven track record in delivering high-quality solutions.
          </p>
          <p className="text-black text-lg">
            I am also a web developer with a strong background in HTML, CSS, and
            JavaScript react js in frontend development mode. and additional
            strong backendSkill express js, node js ,mongodb ,sql . I have
            experience working on various projects, from small to large-scale,
            and I am always eager to learn and improve my skills.
          </p>
        </div>
      </div>
      <div className="text-black">
        <h1 className="text-black text-2xl font-semibold">
          Here are a few Technologies I have been working with recently.
        </h1>
        <div className="flex flex-wrap gap-10">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-5 ">
              <h1 className="text-green-400">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
