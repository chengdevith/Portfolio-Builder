import React from 'react'

function ChooseUsCard({image, label, title, description}) {
  return (
    <div className='w-72 rounded-md bg-white'>
        <div>
            <img className='w-full object-cover rounded-t-md' src={`${image}`} alt=""/>
        </div>
        <div className='p-2 flex flex-col gap-1'>
            <p className='text-color-secondary text-[14px]'>{label}</p>
            <p className='text-[20px]'>{title}</p>
            <p className='text-color-description text-[14px]'>{description}</p>
        </div>
    </div>
  )
}

export default ChooseUsCard