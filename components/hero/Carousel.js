'use client'
import React, { useState } from 'react'
import data from '@/assets/carouseldata'

export default function Carousel() {

    const [index, setIndex] = useState(0);

    setTimeout(() => {
        changeIndex();
    }, 5000);

    function changeIndex() {
        if (index < data.length) {
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    }

    return (
        <div className="container w-full h-full items-center justify-center flex gap-5 flex-col md:flex-row">

            <div className="container md:w-4/12 flex items-center justify-center h-fit md:h-full">
                <img src={data[index]?.img} alt="" className="w-full" />
            </div>

            <div className="container md:w-6/12 flex items-center gap-5 justify-center flex-col h-fit md:h-full">
                <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 md:text-7xl font-bold capitalize">{data[index]?.title}</h1>
                <p className="text-lg font-semibold md:w-8/12 text-center md:text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis sint ipsam alias quaerat, odio nulla maxime quae iste modi ex assumenda maiores aliquam cum eum voluptatibus eligendi, hic voluptatem.</p>
            </div>

        </div>
    )
}
