
import React from 'react'
import About from '../../assets/GIF_images/About_us.gif'

export default function HeroBanner() {
  return (
    <>
        <section className=" py-16 h-screen px-8 max-w-screen-xl m-auto">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-10">
                {/* Left : Text Content */}
                <div className="text-left">
                    <h2 className="text-4xl font-bold text-color-primary leading-10">
                        Crafting Digital <br/>Experiences with Passion
                    </h2>
                    <p className="description my-10">
                        Transforming ideas into elegant solutions through creative design and innovative development
                    </p>
                    <div className="flex space-x-8 mt-15">
                        <div className='shadow-lg shadow-purple-200 p-6 rounded-lg text-center'>
                            <h3 className="text-lg font-semibold text-color-primary">5+</h3>
                            <p className="text-gray-500">Experiences</p>
                        </div>
                        <div className='shadow-lg shadow-purple-200 p-6 rounded-lg text-center'>
                            <h3 className="text-lg font-semibold border-color-primary">20+</h3>
                            <p className="text-gray-500">Project done</p>
                        </div>
                        <div className=' shadow-lg shadow-purple-200 p-6 rounded-lg text-center'>
                            <h3 className="text-lg font-semibold border-color-primary">80+</h3>
                            <p className="text-gray-500">Happy Clients</p>
                        </div>
                    </div>
                </div>

                {/* Right :Image */}
                <div className="flex justify-center">
                <img
                    src={About}
                    alt="About us"
                    className="max-w-sm rounded-lg "
                />
                </div>
            </div>
        </section>
    </>
  )
}
