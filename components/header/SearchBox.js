'use client'
import { DataContext } from '@/context/dataContext';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBox() {

    const [search, setSearch] = useState('');
    const router = useRouter();
    const { searchData, setSearchData } = useContext(DataContext);

    function searchItem() {
        axios.post('https://server-liard-zeta.vercel.app/search', { search: search }).then((res) => {
            setSearchData(res?.data);
        })
    }

    return (
        <div className="container md:w-4/12 flex ms-auto">
            <input onChange={(e) => { setSearch(e.target.value) }} type="text" className="w-full p-3 shadow-lg rounded-s-full focus:outline-none border border-e-0 border-gray-200" placeholder='search...' />
            <Link href={'/result'} onClick={searchItem} className="p-3 rounded-e-full text-white flex items-center justify-center bg-gray-800">
                <FaSearch size={20} />
            </Link>
        </div>
    )
}
