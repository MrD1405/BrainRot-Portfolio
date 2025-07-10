import React from 'react'

const ActionButton = ({action}) => {
  return (
    <div className=" flex items-center justify-center h-full aspect-square  rounded-[50%] border-2  ">
        {action==="accept"?
        <i className="fi fi-rs-arrow-right"></i>
        :
        <i className="fi fi-rs-arrow-left"></i>
    } 
    </div>
  )
}

export default ActionButton