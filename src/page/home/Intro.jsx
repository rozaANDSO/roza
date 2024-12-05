import React from 'react'

const Intro = () => {
  return (
    <>
      <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
        <h1 className="text-white">Hi , I'm</h1>
        <h1
          className="
            text-5xl sm:text-3xl text-secondary
            font-semibold
            "
        >
          Roza Belay Tiruneh
        </h1>
        <h1 className="text-white text-3xl sm:text-3xl">
          Electrical and Computer Engineer & Web Developer
        </h1>
        <p className=" text-white w-2/3">
          I am a passionate and dedicated individual who is always eager to
          learn and grow. I have a strong foundation in electrical engineering
          and a keen interest in web development. I am currently seeking
          opportunities to contribute to innovative projects and build my
          professional portfolio. Please feel free to reach out if you are
          interested in working together.{' '}
        </p>
        <button
          className="
            bg-secondary
            text-white
            font-semibold
            py-3 px-10 rounded-md"
        >
          Get Started
        </button>
      </div>
    </>
  )
}

export default Intro
