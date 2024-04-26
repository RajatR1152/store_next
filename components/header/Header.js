'use client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import Sidebar from '../sidebars/Sidebar';
import SearchBox from './SearchBox';
import Navs from './Navs';

export default function Header() {

    const path = usePathname();
    const [showSidebar, setShowSidebar] = useState(false);

    if (path == '/login' || path == '/register') {
        return null;
    }

    return (
        <div className="container flex items-center w-full p-3 shadow-sm">

            <div className="container items-center gap-5 w-fit flex">
                {showSidebar ? <Sidebar show={showSidebar} setShow={setShowSidebar} /> : null}
                <FaBars onClick={() => { setShowSidebar(true) }} className='cursor-pointer lg:hidden block' size={24} />
                <h1 className="text-3xl font-semibold uppercase">next_store</h1>
            </div>

            <div className="container w-full hidden lg:flex">
                <SearchBox />
                <Navs />
            </div>

        </div>
    )
}
