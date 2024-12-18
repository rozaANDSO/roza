import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='flex gap-10 items-center'>
        <h1 className='text-2xl text-tertiary font-semibold'>{title}</h1>
        <div className="w-40 h-1 bg-black "></div>
      </div>

  )
}

export default SectionTitle
