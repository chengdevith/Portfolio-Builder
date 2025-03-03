
import React from 'react'
import Mission from '../../assets/GIF_images/Mission.gif';

export default function Our_Mission() {
  return (
    <div>
        <section className=" py-16 px-8 max-w-screen-xl m-auto">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">

                {/* left :Image */}
                <div className="flex justify-center ">
                    <img
                        src={Mission}
                        alt="About us"
                        className="max-w-sm rounded-lg"
                    />
                </div>

                {/* Right : Text Content */}
                <div className="text-left">
                    <h2 className="text-4xl font-bold text-color-secondary flex justify-end"> Our Mission</h2>
                    <p className="text-gray-600 mt-9 flex justify-end">
                    To empower professionals and job seekers with beautifully designed, customizable portfolio and CV templates that help them showcase their skills and stand out in their careers.                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}
