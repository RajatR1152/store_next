'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import ProductCard from '../product/ProductCard';

export default function ClothingDeals() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        axios.post('https://server-liard-zeta.vercel.app/clothings', { 'range': 50000 }).then((res) => {
            setData(res.data);
        })
    }

    return (
        <div className="container w-full flex flex-col items-center justify-center gap-10">

            <h1 className="text-xl md:text-5xl font-bold uppercase my-10 text-gray-700">clothings</h1>

            <div className="container h-[470px] w-full overflow-x-auto columns-1 md:columns-4 over-x-scroll">

                {
                    data?.map((d, i) => {
                        while (i < (10)) {
                            return (
                                <ProductCard key={i} d={d} category={'clothings'}/>
                            )
                        }
                    })
                }
                <div className="bg-white h-full w-full flex gap-5 items-center justify-center rounded-lg fit p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                    <h1 className="text-2xl font-semibold text-gray-600">see more</h1>
                    <FaArrowRight className='text-gray-600' size={30} />
                </div>
            </div>
        </div>
    )
}
