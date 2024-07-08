import React from 'react'

const Screen = ({screen}) => {
  return (
      <div className='bg-zinc-300 h-[10vh] sm:h-[12vh] rounded-t-2xl flex justify-end items-end pb-4 pr-10'>
      <span className='text-blue-950 text-5xl font-bold'>{ screen }</span>
      </div>
  )
}

export default Screen