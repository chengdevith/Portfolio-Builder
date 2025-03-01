
import React from 'react'

export default function HeroBanner() {
  return (
    <>
        <section className=" py-16 px-8 max-w-screen-xl m-auto">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-gray-200">
                {/* Left : Text Content */}
                <div className="text-left bg-red-200">
                    <h2 className="text-4xl font-bold text-color-primary">
                        Crafting Digital <br /> Experiences with Passion
                    </h2>
                    <p className="text-gray-600 mt-9">
                        Transforming ideas into elegant solutions through creative design and innovative development
                    </p>
                    <div className="flex space-x-8 mt-9">
                        <div className='border border-purple-600 p-6 rounded-lg text-center'>
                            <h3 className="text-lg font-semibold text-purple-600">5+</h3>
                            <p className="text-gray-500">Experiences</p>
                        </div>
                        <div className='border border-purple-600 p-6 rounded-lg text-center'>
                            <h3 className="text-lg font-semibold text-purple-600">20+</h3>
                            <p className="text-gray-500">Project done</p>
                        </div>
                        <div className='border border-purple-600 p-6 rounded-lg text-center'>
                            <h3 className="text-lg font-semibold text-purple-600">80+</h3>
                            <p className="text-gray-500">Happy Clients</p>
                        </div>
                    </div>
                </div>

                {/* Right :Image */}
                <div className="flex justify-center bg-red-200">
                <img
                    src="/path-to-your-image/about-us.png"
                    alt="About us"
                    className="max-w-sm rounded-lg shadow-lg"
                />
                </div>
            </div>
        </section>
    </>
  )
}
