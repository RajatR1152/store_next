'use client'
import React, { useContext, useEffect, useState } from 'react'
import Quanity from './Quanity'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { DataContext } from '@/context/dataContext';

export default function ProductBtns({ data }) {

  const [user, setUser] = useState([]);
  const router = useRouter();
  const { orderData, setOrderData } = useContext(DataContext);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem('user'));
    setUser(u);
  }, [])

  function addToCart() {

    if (user?.username) {
      let cartData = {
        username: user?.username,
        productname: data?.name,
        price: data?.price,
        quantity: data?.quantity,
        image: data?.image,
        _id: data?._id
      }

      axios.post('https://server-liard-zeta.vercel.app/addtocart', cartData).then((res) => {
        console.log(res?.data);
      })
    }
    else {
      router.push('/login');
    }

  }

  function buy() {
    if (user?.username) {
      let cartData = {
        username: user?.username,
        email: user?.email,
        productname: data?.name,
        price: data?.price,
        quantity: data?.quantity,
        image: data?.image,
        _id: data?._id
      }
      setOrderData(cartData);
      router.push('/paymentpage');
    }
    else {
      router.push('/login');
    }
  }

  return (
    <>
      <div className="container w-full bg-gray-200 rounded-lg p-5 flex md:flex-row flex-col">
        <Quanity data={data} />
        <div className="container w-full flex flex-col gap-5 md:w-8/12 mx-auto">
          <button onClick={() => { addToCart() }} className="w-full p-2 bg-gray-700 hover:bg-slate-900 rounded-lg text-white font-semibold text-lg">
            add to cart
          </button>
          <button onClick={() => { buy() }} className="w-full p-2 bg-gray-700 hover:bg-slate-900 rounded-lg text-white font-semibold text-lg">
            buy now
          </button>
        </div>
      </div>
    </>
  )
}
