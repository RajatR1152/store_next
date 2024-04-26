'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaMobile, FaUser } from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";

export default function page() {

    const [data, setData] = useState({
        fname: '',
        lname: '',
        mobile: '',
        email: '',
        message: ''
    })
    const router = useRouter();
    const [islogedIn, setIsLogedIn] = useState(false);

    let n;
    let v;

    function handle(e) {
        n = e.target.name;
        v = e.target.value;
        setData({ ...data, [n]: v });
    }

    useEffect(() => {
        let u = JSON.parse(localStorage.getItem('user'));
        if (!u?.email) {
            router.push('/login');
        }
    }, [])

    return (
        <div className="container w-full md:p-5 bg-white md:my-10 h-fit">
            <div className="container w-full md:w-10/12 flex flex-col gap-8 p-5 mx-auto">
                <h1 className="text-3xl text-gray-600 capitalize">contact us</h1>
                <p className="text-sm md:w-8/12 text-gray-600 leading-7">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus at, a iure dicta, ad recusandae reiciendis vel asperiores alias.
                </p>
                <p className="text-sm md:w-8/12 text-gray-600 leading-7">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus at, a iure dicta,
                </p>

                <form className='flex flex-col gap-8' action="https://formspree.io/f/mpzgnlpa" method="POST">

                    <div className="container w-full gap-10 flex md:flex-row flex-col">

                        <div className="container items-center justify-center bg-gray-200 w-full h-fit flex">
                            <FaUser size={20} color='gray' className='mx-5' />
                            <input name='fname' value={data.fname} onChange={handle} type="text" className="w-full bg-slate-100 p-3 focus:outline-none" placeholder='first name....' required />
                        </div>

                        <div className="container items-center justify-center bg-gray-200 w-full h-fit flex">
                            <FaUser size={20} color='gray' className='mx-5' />
                            <input name='lname' value={data.lname} onChange={handle} type="text" className="w-full bg-slate-100 p-3 focus:outline-none" placeholder='last name....' required />
                        </div>

                    </div>

                    <div className="container items-center justify-center bg-gray-200 w-full h-fit flex">
                        <IoIosMail size={20} color='gray' className='mx-5' />
                        <input type="email" name='email' value={data.email} onChange={handle} className="w-full bg-slate-100 p-3 focus:outline-none" placeholder='email....' required />
                    </div>

                    <div className="container items-center justify-center bg-gray-200 w-full h-fit flex">
                        <FaMobile size={20} color='gray' className='mx-5' />
                        <input type="number" name='mobile' value={data.mobile} onChange={handle} className="w-full bg-slate-100 p-3 focus:outline-none" placeholder='mobile....' required />
                    </div>

                    <textarea name="message" value={data.message} onChange={handle} id="" cols="30" rows="10" className="w-full p-5 bg-slate-100 focus:outline-none" placeholder='message.....'></textarea>

                    <p className="text-sm text-gray-500 mx-5">{data?.message?.length} characters</p>

                    <button className="w-full p-3 text-lg font-semibold text-white bg-gray-700 hover:bg-gray-900">submit</button>

                </form>

            </div>
        </div>
    )
}
