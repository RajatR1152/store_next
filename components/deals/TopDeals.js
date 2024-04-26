'use client'
import React, { useContext } from 'react'
import MobileDeals from './MobileDeals'
import ClothingDeals from './ClothingDeals'
import LaptopDeals from './LaptopDeals'
import HomeAppliencesDeals from './HomeAppliencesDeals'
import EarbudsDeals from './EarbudsDeals'
import { DataContext } from '@/context/dataContext'
import Loader from '../Loader'

export default function TopDeals() {

  const { loading, setLoading } = useContext(DataContext);

 
  return (
    <div className="container w-screen p-2 md:p-5">

      <div className="container flex flex-col w-full bg-gray-300 gap-9 h-fit p-5">
        <MobileDeals />
        <ClothingDeals />
        <LaptopDeals />
        <HomeAppliencesDeals />
        <EarbudsDeals />
      </div>

    </div>
  )
}
