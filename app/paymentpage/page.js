'use client'
import OrderForm from '@/components/order/OrderForm';
import PaymentMethod from '@/components/order/PaymentMethod';
import { DataContext } from '@/context/dataContext'
import React, { useContext } from 'react'

export default function page() {

    const { orderData, setOrderData } = useContext(DataContext);

    return (
        <div className="container w-full h-fit md:p-5 bg-white">
            <div className="container w-full flex lg:flex-row flex-col p-5 rounded-lg">
                <OrderForm />
                <PaymentMethod data={orderData} />
            </div>
        </div>
    )
}
