'use client'
import Suggestion from '@/components/Suggestion';
import Imgs from '@/components/product/Imgs';
import ProductInfo from '@/components/product/ProductInfo';
import ProductPath from '@/components/product/ProductPath';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {

    const params = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        axios.post(`https://server-liard-zeta.vercel.app/product`, { 'category': params.category[0], 'id': params.category[1] }).then((res) => {
            setData(res?.data[0]);
        })
    }

    return (
        <div>
            <ProductPath />
            <div className="container w-full flex md:flex-row flex-col">
                <Imgs data={data} />
                <ProductInfo data={data} />
            </div>
            <Suggestion />
        </div>
    )
}
