'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { toast } from 'react-toastify';

export default function page() {

    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        cnfpassword: '',
        cart: [],
        orders: []
    });

    const router = useRouter();

    function handle(e) {
        let n = e.target.name;
        let v = e.target.value;
        setUser({ ...user, [n]: v });
    }

    function submit(e) {
        e.preventDefault();
        if (user?.password == user?.cnfpassword) {
            axios.post('https://server-liard-zeta.vercel.app/register', user).then((res) => {
                console.log(res?.data);
                ToastSuccess();
                router.push('/login')
            })
        }
    }

    const ToastSuccess = () => {
        toast.success("registerly Successfull! please login.");
    }

    return (
        <div className="container flex items-center justify-center h-screen w-screen p-5 bg-slate-100">

            <form method='post' className="container w-full p-5 md:w-4/12 bg-slate-200 gap-5 rounded-lg flex flex-col items-center justify-center">

                <h1 className="text-3xl font-bold text-center">Sign up</h1>

                <input name='username' value={user?.username} onChange={handle} type="text" className="w-full p-3 rounded-lg focus:outline-none" placeholder='username...' required />

                <input name='email' value={user?.email} onChange={handle} type="email" className="w-full p-3 rounded-lg focus:outline-none" placeholder='email address...' required />

                <div className="container bg-white items-center rounded-lg justify-center w-full flex">
                    <input name='password' value={user?.password} onChange={handle} type={showPassword ? 'text' : 'password'} placeholder='password' className='w-full p-3 rounded-lg focus:outline-none' required />
                    {showPassword ? <IoEyeOffOutline onClick={() => { setShowPassword(false) }} size={25} className='mx-5 cursor-pointer text-gray-700' /> : <IoEyeOutline onClick={() => { setShowPassword(true) }} size={25} className='mx-5 cursor-pointer text-gray-700' />}
                </div>

                <input name='cnfpassword' value={user?.cnfpassword} onChange={handle} type="text" className="w-full p-3 rounded-lg focus:outline-none" placeholder='confirm password...' required />

                <button onClick={submit} className="p-2 rounded-lg text-lg font-bold text-white w-full bg-violet-900">Sign up</button>

                <span className="text-md text-gray-800">already have account ? <Link href={'/login'} className="text-blue-600">login</Link></span>

            </form>

        </div>
    )
}
