import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'General physician' ? 'bg-[#E2E5FF] text-black ' : ''}`}>General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatricians' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Gastroenterologist</p>
        </div>
        
<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-6">
  {filterDoc.map((item) => (
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
          alt={item.name}
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

        {/* Appointment Action */}
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

      </div>
    </div>
  )
}

export default Doctors