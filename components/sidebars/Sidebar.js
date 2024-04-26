import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { LuShoppingCart } from 'react-icons/lu'
import { RxCross2 } from 'react-icons/rx'

export default function Sidebar({ show, setShow }) {


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
        <div className="container absolute mt-[570px] p-5 bg-slate-300 z-10 md:w-5/12 flex flex-col w-8/12 h-screen shadow-xl rounded-e-xl gap-5 lg:hidden">
            <RxCross2 onClick={() => { setShow(false) }} className='cursor-pointer font-bold ms-auto' size={25} />
            <Link onClick={() => { setShow(false) }} href={'/'} className="text-lg font-medium">home </Link>
            <Link onClick={() => { setShow(false) }} href={'/store/1'} className="text-lg font-medium">store </Link>
            <Link onClick={() => { setShow(false) }} href={'/contact'} className="text-lg font-medium">contact us </Link>
            <Link onClick={() => { setShow(false) }} href={'/'} className="text-lg font-medium">orders</Link>
            <Link onClick={() => { setShow(false) }} href={'/cart'} className="text-lg font-medium"><LuShoppingCart size={25} /></Link>
            {
                user ? <button onClick={logOut} className="text-black md:text-center w-fit text-left text-lg font-semibold p-3 md:px-6 flex gap-3 items-center justify-center"><FaUser title='profile' size={20} />log out</button>
                    :
                    <Link href={'/login'} className="bg-black text-white text-lg font-semibold p-3 px-6">login</Link>
            }
        </div>
    )
}
