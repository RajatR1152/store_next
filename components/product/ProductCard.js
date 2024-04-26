import Link from 'next/link'
import React from 'react'
import FormatPrice from '../FormatPrice'
import Loader from '../Loader';

export default function ProductCard({ d, category }) {

    function limitDescription(description, limit) {
        const words = description.split(' ');

        const limitedDescription = words.slice(0, limit).join(' ');

        return limitedDescription;
    }

    if (!d?.price) {
        return <div className="contaier w-full h-[450px] bg-white">
            <Loader />
        </div>
    }

    return (
        <Link className='float-left w-full' key={d._id} href={`/product/${category}/${d._id}`} >
            <div className="bg-white mb-5 flex flex-col h-[450px] w-full rounded-lg p-2  hover:translate-y-2 hover:shadow-xl transition duration-300">
                <figure className="mb-2 h-3/5">
                    <img src={d?.image} alt="" className="h-full mx-auto w-auto mr-auto" />
                </figure>
                <div className="rounded-lg p-4 h-2/5 z-10 mt-auto bg-[#262627] flex-col">
                    <div>
                        <h5 className="text-white text-xl h-fit font-semibold leading-6">
                            {limitDescription(d?.name, 4)} ....
                        </h5>
                        <span className="text-xs text-gray-400 leading-none">Just the right amount of everything.</span>
                    </div>
                    <div className="flex items-center">
                        <div className="text-lg text-white font-light">
                            <FormatPrice price={parseInt(d?.price)} />
                        </div>
                        <button className="rounded-full mt-auto w-fit h-fit bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:shadow-xl focus:outline-non p-3 flex ml-auto transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}
