'use client'
import FormatPrice from '@/components/FormatPrice';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

export default function page() {
    const [user, setUser] = useState(null);
    const [cartData, setCartData] = useState([]);
    const [total, setTotal] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);
        getData(storedUser);
    }, [remove]);


    const getData = (u) => {
        if (u?.email) {
            axios.post('https://server-liard-zeta.vercel.app/cart', { email: u?.email })
                .then((res) => {
                    setCartData(res.data?.cart);
                })
                .catch((error) => console.error('Error fetching data:', error));
        }
    };

    function remove(d) {
        axios.post('https://server-liard-zeta.vercel.app/cartremove', { username: user?.username, email: user?.email, productname: d.productname }).then((res) => {
            console.log(res.data);
        })
    }

    return (
        <div className="container w-full md:p-5 bg-slate-50">
            <div className="container mx-auto mt-10">
                <div className="flex md:flex-row flex-col shadow-md my-10">
                    <div className="md:w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{cartData?.length} Items</h2>
                        </div>

                        <div className="container w-full overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead></thead>
                                <tbody>
                                    <tr className='border-b text-gray-600 font-light border-gray-400'>
                                        <th className='p-3 font-semibold'>#</th>
                                        <th className='p-3 font-semibold'>product name</th>
                                        <th className='p-3 font-semibold'>price</th>
                                        <th className='p-3 font-semibold'>quantity</th>
                                        <th className='p-3 font-semibold'>total</th>
                                        <th className='p-3 font-semibold'>action</th>
                                    </tr>

                                    {
                                        cartData?.map((d, i) => {
                                            return (
                                                <tr key={i} className='border-b text-gray-600 font-light border-gray-400'>
                                                    <th className='p-3'>{i + 1}</th>
                                                    <th className='p-3 text-start flex gap-3'> <img src={d?.image} alt="" className="w-12 h-12" /> {d?.productname}</th>
                                                    <th className='p-3'><FormatPrice price={parseInt(d?.price.replace(",", ''))} /></th>
                                                    <th className='p-3'>{d?.quantity}</th>
                                                    <th className='p-3'><FormatPrice price={parseInt(d?.price.replace(",", '')) * d?.quantity} /></th>
                                                    <th className='p-3 text-center'><RxCross2 onClick={() => { remove(d) }} className='cursor-pointer' /></th>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                        <Link href="/store" className="flex text-center justify-center font-semibold gap-2 text-indigo-600 text-sm mt-10">
                            <FaArrowLeft size={18} className='text-blue-500' />
                            Continue Shopping
                        </Link>
                    </div>

                    <div id="summary" className="md:w-1/4 w-full px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items: {cartData?.length} </span>
                            <span className="font-semibold text-sm">{total}</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        </div>
                        <div className="py-10">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" placeholder="Enter your code" className="p-2 text-sm w-full" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>$600</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
