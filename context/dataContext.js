'use client'
import { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {

    const [mobilesdData, setMobileData] = useState([]);
    const [earphonesData, setEarphonesData] = useState([]);
    const [laptopsData, setLaptopsData] = useState([]);
    const [homeAppliencesData, setHomeAppliences] = useState([]);
    const [tvsData, setTvsData] = useState([]);
    const [clothingsData, setClothingsData] = useState([]);
    const [shoesData, setShoesData] = useState([]);
    const [watchesData, setWatchesData] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState('all');
    const [searchData, setSearchData] = useState('');

    return (
        <DataContext.Provider value={{ orderData, setOrderData, mobilesdData, watchesData, setWatchesData, shoesData, setShoesData, setMobileData, earphonesData, tvsData, setTvsData, clothingsData, setClothingsData, setEarphonesData, laptopsData, setLaptopsData, homeAppliencesData, setHomeAppliences, loading, setLoading, category, setCategory, searchData, setSearchData }}>
            {children}
        </DataContext.Provider>
    )
}