import React from 'react'

const Nums = ({nums , hight}) => {
  return (
    <div>
          <button className={` btn btn-circle  btn-active btn-outline btn-ghost text-2xl w-14 h-14 `}>{ nums}</button>
    </div>
  )
}

export default Nums