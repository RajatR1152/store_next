'use client'
import FormatPrice from '@/components/FormatPrice'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

export default function page() {

    const [user, setUser] = useState(null);
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);
        getData(storedUser);
    }, [remove]);


    const getData = (u) => {
        if (u?.username) {
            axios.post('https://server-liard-zeta.vercel.app/orders', { email: u?.email })
                .then((res) => {
                    setData(res.data?.orders);
                })
                .catch((error) => console.error('Error fetching data:', error));
        }
        else {
            router.push('/login');
        }
    };

    function remove(d) {
        axios.post('https://server-liard-zeta.vercel.app/cartremove', { username: user?.username, email: user?.email, productname: d?.productname }).then((res) => {
            console.log(res.data);
        })
    }

    return (
        <div className="w-full bg-white px-10 h-screen overflow-y-auto py-10">
            <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">your orders</h1>
                <h2 className="font-semibold text-2xl">{data?.length} Items</h2>
            </div>

            <div className="container w-full overflow-y-auto overflow-x-auto">
                {
                    data?.length > 0 ?
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
                                    data?.map((d, i) => {
                                        return (
                                            <tr key={i} className='border-b text-gray-600 font-light border-gray-400'>
                                                <th className='p-3'>{i + 1}</th>
                                                <th className='p-3 text-start flex gap-3'> <img src={d?.image} alt="" className="w-12 h-12" /> {d?.productname}</th>
                                                <th className='p-3'><FormatPrice price={parseInt(d?.price.replace(",", ''))} /></th>
                                                <th className='p-3'>{d?.quantity}</th>
                                                <th className='p-3'><FormatPrice price={parseInt(d?.price.replace(",", '')) * d?.quantity} /></th>
                                                <th className='p-3 text-center'><RxCross2 onClick={() => { remove(d) }} className='cursor-pointer w-fit mx-auto' /></th>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                        :
                        <div className="container w-full h-screen flex flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold text-gray-700">no orders yet</h1>
                        </div>
                }
            </div>
        </div>
    )
}
