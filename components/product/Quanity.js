'use client'
import React, { useState } from 'react'

export default function Quanity({ data }) {

    const [quantity, setQuantity] = useState(0);

    function inc() {
        if (quantity < 11) {
            setQuantity(parseInt(quantity) + 1);
            data.quantity = quantity + 1;
        }
    }

    function dec() {
        if (quantity > 0) {
            setQuantity(parseInt(quantity) - 1);
            data.quantity = quantity + 1;
        }
    }

    return (
        <div className="container md:h-20 w-full md:w-3/12 flex p-3">
            <button onClick={dec} className="btn md:w-5/12 p-3 bg-gray-400 rounded-s-lg text-lg font-bold text-white">-</button>
            <input type="number" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} className="w-full text-center resize-none focus:outline-none border-y-2 border-gray-400 p-3" />
            <button onClick={inc} className="btn md:w-4/12 p-3 bg-gray-400 rounded-e-lg text-lg font-bold text-white">+</button>
        </div>

    )
}
