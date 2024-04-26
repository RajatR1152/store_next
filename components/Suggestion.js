'use client'
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ProductCard from './product/ProductCard';

export default function Suggestion() {

    const path = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts();
        console.log(path.category[0])
    }, []);

    async function getProducts() {
        await axios.post(`https://server-liard-zeta.vercel.app/${path.category[0] == 'allproducts' ? 'products' : path?.category[0]}`, { 'range': 50000 }).then((res) => {
            setData(res?.data);
        }
        )
    }

    return (
        <div className=' flex flex-col gap-5'>

            <h1 className="text-4xl font-bold  my-10 capitalize text-center">similar products</h1>

            <div className="containe w-full h-fit md:h-[490px] p-4 columns-1 md:columns-4 overflow-x-auto bg-gray-200">
                {
                    data?.map((d) => {
                        return (
                            <ProductCard category={path?.category[0]} d={d} />
                        )
                    })
                }
            </div>

        </div>
    )
}
