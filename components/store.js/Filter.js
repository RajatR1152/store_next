'use client'
import React, { useContext, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import FormatPrice from '../FormatPrice';
import { DataContext } from '@/context/dataContext';

export default function Filter({ category, setCategory, show, range, setShow, setRange }) {

  const {loading,setLoading} = useContext(DataContext);

  let categories = ['laptops', 'shoes', 'earphones', 'tvs', 'mobiles', 'watches', 'clothings', 'all'];

  function changeRange(e) {
    setRange(e.target.value);
  }

  return (
    <div className="containe w-8/12 mt-2 rounded-e-lg md:w-2/12 flex z-10 gap-3 bg-white md:relative absolute flex-col items-center p-5 h-fit">
      <div className="container w-full flex">
        <h1 className="text-xl font-semibold text-center text-gray-600">Filters</h1>

        <RxCross2 className='ms-auto mb-8 cursor-pointer' onClick={() => { setShow(false) }} size={25} />
      </div>

      {
        categories.map((c, i) => {
          return (
            <button onClick={() => { setCategory(c);setLoading(true) }} key={i} className={category == c ? "w-full px-5 p-3 bg-[#262627] text-lg font-semibold text-white rounded-xl" : "w-full p-3 bg-slate-100 text-lg font-semibold text-gray-700 rounded-xl"}>{c}</button>
          )
        })
      }

      <div className="container flex flex-col items-center justify-center gap-3 w-full">

        <span className="flex">
          <h2 className="text-md font-semibold text-gray-700">price range</h2>
          <h2 className="text-sm font-light text-gray-700"><FormatPrice price={100} /> - <FormatPrice price={range} /></h2>
        </span>
        <input min={100} max={50000} type="range" name="range" id="range" onChange={changeRange} />
      </div>

    </div>
  )
}
