'use client'
import ProductCard from '@/components/product/ProductCard';
import { DataContext } from '@/context/dataContext';
import React, { useContext } from 'react'

export default function page() {

    const { searchData } = useContext(DataContext);

    return (
        <div className="container w-full h-screen overflow-y-auto">
            <div className="container w-full h-full flex md:flex-row flex-col gap-4">
                {

                    searchData && searchData?.map((d, i) => {
                        return (
                            <ProductCard d={d} />
                        )
                    })
                }
            </div>
        </div>
    )
}
