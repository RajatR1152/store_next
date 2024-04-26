'use client'
import React, { useContext, useState } from 'react';
import Products from '../Products';
import Filter from '@/components/store.js/Filter';
import { LuMenu } from 'react-icons/lu';
import { DataContext } from '@/context/dataContext';

export default function Page() {
    const {category, setCategory} = useContext(DataContext);
    const [showFilter, setShowFilter] = useState(true);
    const [range, setRange] = useState(5000000);

    return (
        <div className="container flex w-screen md:w-full h-fit md:h-screen">
            {showFilter ? (
                <Filter category={category} range={range} setRange={setRange} show={showFilter} setShow={setShowFilter} setCategory={setCategory} />
            ) : (
                <LuMenu size={30} onClick={() => setShowFilter(true)} className="cursor-pointer z-20 m-5 absolute" />
            )}
            <Products range={range} category={category} />
        </div>
    );
}
