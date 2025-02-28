
import React from 'react'

export default function Our_Vision() {
  return (
    <div>
        <section className=" py-16 px-8 max-w-screen-xl m-auto">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-gray-200">
                {/* Left : Text Content */}
                <div className="text-left bg-red-200">
                    <h2 className="text-4xl font-bold text-color-secondary">Our Vision</h2>
                    <p className="text-gray-600 mt-9">
                        To become the leading platform for creating professional portfolios and resumes, inspiring individuals to achieve their career goals with confidence and creativity.
                    </p>
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
    </div>
  )
}
