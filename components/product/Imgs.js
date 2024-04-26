'use client'
import React, { useEffect, useState } from 'react'

export default function Imgs({ data }) {

    const [mainImg, setMainImg] = useState();

    useEffect(() => {
        setMainImg(data[0]?.image);
    }, [data])

    let imgs = [
        'https://cdn-icons-png.flaticon.com/512/5038/5038590.png',
        'https://img.freepik.com/premium-psd/3d-demo-high-quality-render-illustration-icon_800638-705.jpg',
        'https://png.pngtree.com/png-vector/20220724/ourmid/pngtree-vector-demo-icon-instal-download-isolated-vector-png-image_14209266.png',
        data[0]?.image
    ]

    return (
        <div className="container md:h-[500px] w-full flex flex-col md:flex-row md:w-5/12 p-5">
            <div className="container md:w-2/12 p-2 flex flex-row md:flex-col items-center justify-center gap-5">
                {
                    imgs?.map((d, i) => {
                        return (
                            <img src={d} onClick={() => { setMainImg(d) }} key={i} alt="" className={d == mainImg ? "w-2/12 md:w-full border-2 border-blue-500 cursor-pointer h-auto" : "w-2/12 md:w-full cursor-pointer h-auto"} />
                        )
                    })
                }
            </div>
            <div className="container flex-col flex items-center justify-center w-full md:w-9/12 p-2">
                <img src={mainImg} alt="" className="h-full" />
            </div>
        </div>
    )
}
