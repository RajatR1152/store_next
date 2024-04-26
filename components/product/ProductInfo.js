'use client'
import React, { useState } from 'react'
import FormatPrice from '../FormatPrice'
import { FaAngleDown, FaAngleUp, FaCircle } from 'react-icons/fa';
import ProductBtns from './ProductBtns';

export default function ProductInfo({ data }) {

    let descriptions = data[0]?.description;

    const [len, setLen] = useState(5);

    return (
        <div className="container w-full md:w-7/12 p-5 h-fit">
            <h1 className="md:text-3xl font-bold text-2xl text-gray-900">{data[0]?.name}</h1>

            <div className="container w-full items-center flex my-6 gap-5">
                <div className="container w-fit p-4 bg-gray-200 text-xl font-bold rounded-xl">
                    <FormatPrice price={parseInt(data[0]?.price)} />
                </div>
                <h1 className="text-xl capitalize text-green-400 font-bold text-green">
                    save upto 20%
                </h1>
            </div>

            <div className="container w-full h-fit rounded-xl p-5 bg-gray-200">
                <p className="text-[15px] leading-7 font-semibold text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos dolores nesciunt non voluptate ea officia impedit tempore at molestiae aliquid possimus quibusdam error, inventore quae culpa reprehenderit amet eaque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos dolores nesciunt non voluptate ea officia impedit tempore at molestiae aliquid possimus quibusdam error, inventore quae culpa reprehenderit amet eaque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos dolores nesciunt non voluptate ea officia impedit tempore at molestiae aliquid possimus quibusdam error, inventore quae culpa reprehenderit amet eaque.
                </p>
            </div>

            <div className="container w-full my-6 h-fit rounded-xl p-5 gap-5 flex flex-col bg-gray-200">

                <h1 className="text-2xl font-semibold text-gray-800">About this item:</h1>

                <ul className='flex flex-col gap-2'>
                    {
                        descriptions?.map((d, i) => {
                            while (i < len) {
                                return (
                                    <span key={i} className='flex gap-4 items-center'><FaCircle size={5} /><li className="text-[15px] font-semibold text-gray-700">{d}</li></span>
                                )
                            }
                        })
                    }

                    {
                        len == descriptions?.length ? <button onClick={() => { setLen(5) }} className="bg-transparent flex gap-2 items-center justify-center text-lg text-gray-700 font-bold p-3 w-full">show less <FaAngleUp size={20} /></button>
                            :
                            <button onClick={() => { setLen(descriptions.length) }} className="bg-transparent text-lg text-gray-700 font-bold flex gap-2 items-center justify-center p-3 w-full">show more <FaAngleDown size={20} /></button>
                    }

                </ul>

            </div>

            <ProductBtns data={data[0]} />

        </div>
    )
}
