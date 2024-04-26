import React from 'react'
import Carousel from './Carousel'

export default function Hero() {
    return (
        <div className="container w-full h-fit md:h-screen p-5">
            <div className="container w-full p-5 h-full bg-gray-300">
                <Carousel />
            </div>
        </div>
    )
}
