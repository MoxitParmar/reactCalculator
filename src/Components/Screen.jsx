import React from 'react'

const Screen = ({screen}) => {
  return (
      <div className='bg-zinc-300 h-[25%] rounded-t-2xl flex justify-end items-end pb-10 pr-10'>
      <span className='text-blue-950 text-5xl font-bold'>{ screen }</span>
      </div>
  )
}

export default Screen