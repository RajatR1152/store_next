'use client'
import Loader from '@/components/Loader';
import ProductCard from '@/components/product/ProductCard';
import { DataContext } from '@/context/dataContext';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

export default function Products({ category, range }) {

    const [data, setData] = useState([]);

    const { loading, setLoading } = useContext(DataContext);


    useEffect(() => {
        getData();
        console.log(range)
    }, [category, range]);

    const params = useParams();

    let page = params.page[0];


    function getData() {
        axios.post(`https://server-liard-zeta.vercel.app/${category}`, { 'range': range }).then((res) => {
            setData(res.data);
            setLoading(false);
        });
    }

    if (loading) {
        return <div className="container w-full h-screen flex items-center justify-center">
            <Loader />
        </div>
    }

    return (
        <div className='shadow-xl w-full h-full overflow-y-auto mx-auto'>
            <div className="container columns-1 bg-slate-100 md:columns-2 lg:columns-3 xl:columns-4 gap-3 w-full p-5 h-fit">
                {
                    data.map((d, i) => {
                        while (i < 40) {
                            if (parseInt(d.price) <= range) {
                                return (
                                    <ProductCard category={category} d={d} />
                                )
                            }
                        }
                    })
                }

            </div>
        </div>
    )
}
