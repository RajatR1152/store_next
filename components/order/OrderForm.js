'use client'
import React from 'react'

export default function OrderForm() {
    return (
        <div className="container flex flex-col md:h-screen items-center justify-center gap-5 w-full lg:w-7/12 p-5 rounded-lg bg-slate-300">

            <div className="container w-full flex items-center justify-center md:flex-row flex-col gap-5">
                <h1 className="text-md w-full md:w-3/12 font-semibold text-gray-600 capitalize">first name : </h1>
                <input type="text" className="w-full md:w-8/12 p-3 rounded-lg focus:outline-none" placeholder='first name...' />
            </div>

            <div className="container w-full flex items-center justify-center md:flex-row flex-col gap-5">
                <h1 className="text-md w-full md:w-3/12 font-semibold text-gray-600 capitalize">last name : </h1>
                <input type="text" className="w-full md:w-8/12 p-3 rounded-lg focus:outline-none" placeholder='last name...' />
            </div>

            <div className="container w-full flex items-center justify-center md:flex-row flex-col gap-5">
                <h1 className="text-md w-full md:w-3/12 font-semibold text-gray-600 capitalize">address line 1 : </h1>
                <input type="text" className="w-full md:w-8/12 p-3 rounded-lg focus:outline-none" placeholder='address line 1 ...' />
            </div>

            <div className="container w-full flex items-center justify-center md:flex-row flex-col gap-5">
                <h1 className="text-md w-full md:w-3/12 font-semibold text-gray-600 capitalize">address line 2 : </h1>
                <input type="text" className="w-full md:w-8/12 p-3 rounded-lg focus:outline-none" placeholder='address line 2...' />
            </div>

            <div className="container w-full flex items-center justify-center md:flex-row flex-col gap-5">
                <h1 className="text-md w-full md:w-3/12 font-semibold text-gray-600 capitalize">city : </h1>
                <input type="text" className="w-full md:w-8/12 p-3 rounded-lg focus:outline-none" placeholder='city...' />
            </div>

            <div className="container w-full flex items-center justify-center md:flex-row flex-col gap-5">
                <h1 className="text-md w-full md:w-3/12 font-semibold text-gray-600 capitalize">pin code : </h1>
                <input type="text" className="w-full md:w-8/12 p-3 rounded-lg focus:outline-none" placeholder='pin code...' />
            </div>

            <div className="container w-full flex items-center justify-center md:flex-row flex-col gap-5">
                <h1 className="text-md w-full md:w-3/12 font-semibold text-gray-600 capitalize">country : </h1>
                <input type="text" className="w-full md:w-8/12 p-3 rounded-lg focus:outline-none" placeholder='country...' />
            </div>

            <div className="container w-full flex items-center justify-center md:flex-row flex-col gap-5">
                <h1 className="text-md w-full md:w-3/12 font-semibold text-gray-600 capitalize">email : </h1>
                <input type="email" className="w-full md:w-8/12 p-3 rounded-lg focus:outline-none" placeholder='email...' />
            </div>

            <div className="container w-full flex items-center justify-center md:flex-row flex-col gap-5">
                <h1 className="text-md w-full md:w-3/12 font-semibold text-gray-600 capitalize">mobile : </h1>
                <input type="number" className="w-full md:w-8/12 p-3 rounded-lg focus:outline-none" placeholder='mobile...' />
            </div>

        </div>
    )
}
