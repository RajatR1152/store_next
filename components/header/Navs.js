'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { LuShoppingCart } from 'react-icons/lu'

export default function Navs() {

    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        getUser();
    }, [])

    function getUser() {
        let u = JSON.parse(localStorage.getItem("user"));
        setUser(u);
        if (user) {
            localStorage.setItem("islogedIn", true);
        }
    }

    function logOut() {
        localStorage.clear();
        router.push('/login');
    }

    return (
        <div className="container w-fit me-10 gap-8 md:ms-auto items-center md:flex flex-col md:flex-row">
            <Link href={'/'} className="text-lg font-medium">home </Link>
            <Link href={'/store/1'} className="text-lg font-medium">store </Link>
            <Link href={'/contact'} className="text-lg font-medium">contact us </Link>
            <Link href={'/orders'} className="text-lg font-medium">orders</Link>
            <Link href={'/cart'} className="text-lg font-medium"><LuShoppingCart size={25} /></Link>
            {
                user ? <button onClick={logOut} className="text-black text-lg font-semibold p-3 px-6 flex gap-3 items-center justify-center"><FaUser title='profile' size={20} />log out</button>
                    :
                    <Link href={'/login'} className="bg-black text-white text-lg font-semibold p-3 px-6">login</Link>
            }
        </div>
    )
}
