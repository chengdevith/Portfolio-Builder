import React from 'react'

function ChooseUsCard({id,image, label, title, description}) {
  return (
    <div className='w-[320px]  bg-white hover:border-color-secondary border duration-200 ease-in rounded-md shadow-sm '>
        <div>
            <img className='w-full object-cover rounded-t-md' src={`${image}`} alt=""/>
        </div>
        <div className='px-3 py-4 flex flex-col gap-1'>
            <p className='text-color-secondary text-[14px]'>{label}</p>
            <p className='text-[20px]'>{title}</p>
            <p className='text-color-description text-[14px] line-clamp-1'>{description}</p>
        </div>
    </div>
  )
}

export default ChooseUsCard