
import React from 'react'
import Creative_Team from '../../assets/GIF_images/Creative_team.gif'

export default function Our_Vision() {
  return (
    <div>
        <section className=" py-16 px-8 max-w-screen-xl m-auto">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Left : Text Content */}
                <div className="text-left">
                    <h2 className="text-4xl font-bold text-color-secondary">Our Vision</h2>
                    <p className="text-color-description mt-9">
                        To become the leading platform for creating professional portfolios and resumes, inspiring individuals to achieve their career goals with confidence and creativity.
                    </p>
                </div>

                {/* Right :Image */}
                <div className="flex justify-center">
                <img
                    src={Creative_Team}
                    alt="About us"
                    className="max-w-sm rounded-lg "
                />
                </div>
            </div>
        </section>
    </div>
  )
}
