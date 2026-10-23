
import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      {/* About Heading */}
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-semibold'>US</span>
        </p>
      </div>

      {/* About Section */}
      <div className='my-10 flex flex-col md:flex-row items-center gap-12'>

        <img
          className='w-full md:max-w-[360px] rounded-2xl shadow-md object-cover'
          src={assets.about_image}
          alt="About Us"
        />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 leading-7'>

          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare
            needs conveniently and efficiently. At Prescripto, we understand the
            challenges individuals face when it comes to scheduling doctor
            appointments and managing their health records.
          </p>

          <p>
            Prescripto is committed to excellence in healthcare technology.
            We continuously strive to enhance our platform, integrating the
            latest advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the way.
          </p>

          <b className='text-gray-800 text-base'>Our Vision</b>

          <p>
            Our vision at Prescripto is to create a seamless healthcare experience
            for every user. We aim to bridge the gap between patients and
            healthcare providers, making it easier for you to access the care
            you need, when you need it.
          </p>

        </div>
      </div>

      {/* Why Choose Us Heading */}
      <div className="text-xl my-8">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      {/* Why Choose Us Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">

        <div className="border border-gray-200 rounded-xl px-8 md:px-10 py-10 flex flex-col gap-5 text-[15px] text-gray-600 cursor-pointer hover:bg-primary hover:text-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <b className="text-base">Efficiency:</b>
          <p className="leading-6">
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>

        <div className="border border-gray-200 rounded-xl px-8 md:px-10 py-10 flex flex-col gap-5 text-[15px] text-gray-600 cursor-pointer hover:bg-primary hover:text-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <b className="text-base">Convenience:</b>
          <p className="leading-6">
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>

        <div className="border border-gray-200 rounded-xl px-8 md:px-10 py-10 flex flex-col gap-5 text-[15px] text-gray-600 cursor-pointer hover:bg-primary hover:text-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <b className="text-base">Personalization:</b>
          <p className="leading-6">
            Tailored recommendations and reminders to help you stay on top
            of your health.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About
