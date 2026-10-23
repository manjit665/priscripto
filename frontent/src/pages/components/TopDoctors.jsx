import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const TopDoctors = () => {

    const navigate = useNavigate()

    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            
<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-6 px-3 sm:px-0">
  {doctors.slice(0, 10).map((item) => (
    <div
      key={item._id}
      onClick={() => {
        navigate(`/appointment/${item._id}`);
        window.scrollTo(0, 0);
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-100/70 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
    >
      {/* Doctor Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-[#EAF0FF] to-[#DCE6FF]">
        <img
          src={item.image}
          alt={`Dr. ${item.name}`}
          loading="lazy"
          className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
        />

        {/* Availability Badge */}
        <div
          className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm backdrop-blur-sm ${
            item.available
              ? "bg-white/95 text-emerald-600"
              : "bg-white/95 text-slate-500"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              item.available
                ? "bg-emerald-500 animate-pulse"
                : "bg-slate-400"
            }`}
          />
          {item.available ? "Available" : "Unavailable"}
        </div>
      </div>

      {/* Doctor Details */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-[17px] font-semibold text-slate-800 group-hover:text-primary transition-colors line-clamp-1">
          {item.name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {item.speciality}
        </p>

        <div className="mt-auto pt-5">
          <div
            className={`w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium transition-all duration-300 ${
              item.available
                ? "bg-[#EEF1FF] text-primary group-hover:bg-primary group-hover:text-white"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {item.available ? "Book Appointment" : "View Profile"}
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
        </div>

    )
}

export default TopDoctors