'use client'
import React, { useEffect, useState } from 'react'
import FormatPrice from '../FormatPrice';
import axios from 'axios';

export default function PaymentMethod({ data }) {

    console.log("pm ",data);

    const [user, setUser] = useState([]);
    useEffect(() => {
        const u = JSON.parse(localStorage.getItem('user'));
        setUser(u);
    }, [])

    function placeOrder() {

        let cartData = {
            username: user?.username,
            productname: data?.productname,
            price: data?.price,
            quantity: data?.quantity,
            image: data?.image,
            _id: data?._id
        }

        axios.post('https://server-liard-zeta.vercel.app/placeorder', cartData).then((res) => {
            console.log(res?.data);
        })
        console.log("cartData",cartData);
    }

    return (
        <div className="container h-fit rounded-lg w-full md:w-4/12 mx-auto">
            <div className="bg-slate-300 md:h-screen md:mt-0 mt-10 overflow-y-auto w-full rounded-lg fit p-5 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <figure className="mb-2 bg-white">
                    <img src={data?.image} alt="" className="h-64 ml-auto mr-auto" />
                </figure>
                <div className="rounded-lg p-4 h-fit mt-auto bg-gray-700 flex flex-col">
                    <div>
                        <h5 className="text-white text-xl h-fit font-bold leading-8">
                            {data?.productname}
                        </h5>
                    </div>
                    <hr className='mt-5' />
                    <table className='w-full text-center my-5 table-auto'>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th className="w-4/12 border-b-2 border-gray-600 text-white p-2">
                                    price
                                </th>
                                <th className="w-4/12 border-b-2 border-gray-600 text-white p-2">
                                    quantity
                                </th>
                                <th className="w-4/12 border-b-2 border-gray-600 text-white p-2">
                                    total
                                </th>
                            </tr>
                            <tr>
                                <td className="w-4/12 border-b-2 border-gray-600 text-white p-2">
                                    <FormatPrice price={parseInt(data?.price)} />
                                </td>
                                <td className="w-4/12 border-b-2 border-gray-600 text-white p-2">
                                    {data?.quantity}
                                </td>
                                <td className="w-4/12 border-b-2 border-gray-600 text-white p-2">
                                    <FormatPrice price={parseInt(data?.price) * data?.quantity} />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="container w-full flex flex-col gap-5 p-5">

                        <div className="container w-full flex gap-5">
                            <input type="radio" name="" id="" />
                            <h1 className="text sm font-semibold text-white capitalize">bank transfer</h1>
                        </div>

                        <div className="container w-full flex gap-5">
                            <input type="radio" name="" id="" />
                            <h1 className="text sm font-semibold text-white capitalize">cash on delivery</h1>
                        </div>

                        <div className="container w-full flex gap-5">
                            <input type="radio" name="" id="" />
                            <h1 className="text sm font-semibold text-white capitalize">UPI</h1>
                        </div>

                        <button onClick={placeOrder} className="p-3 bg-transparent border-2 border-white hover:bg-black hover:border-black rounded-lg text-lg w-full text-white font-semibold">place orders</button>

                    </div>

                </div>
            </div>
        </div>
    )
}
