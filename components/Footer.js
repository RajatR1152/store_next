'use client'
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { CiLinkedin, CiLocationOn, CiMail, CiMobile1 } from 'react-icons/ci'
import Link from 'next/link'
import FollowUs from './FollowUs'
import { usePathname } from 'next/navigation'

export default function Footer() {

    const path = usePathname();

    if (path == '/login' || path == '/register') {
        return null;
    }

    return (
        <>
            <div className="container border-t border-gray-400 w-full p-5 flex items-center justify-center gap-9 md:flex-row flex-col bg-[#262627] text-white">

                <div className="container flex flex-col gap-10 w-full md:w-4/12 p-5">
                    <h1 className="md:text-5xl font-semibold uppercase">next_store</h1>
                    <p className="text-m leading-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur non optio laborum corrupti rerum quas. Eaque tempora ullam nihil! Sequi ullam consequuntur blanditiis autem obcaecati aut nulla nihil neque.
                    </p>
                </div>

                <div className="container flex flex-col gap-5 items-center justify-center h-fit w-full md:w-4/12">
                    <h1 className="md:text-3xl font-semibold">Subscribe</h1>
                    <div className="flex w-full">
                        <input type="text" placeholder='email...' className="w-10/12 focus:outline-none  p-3 bg-transparent border-b-2 border-orange-400" />
                        <button className="p-3 w-2/12 bg-transparent text-lg font-semibold border-b-2 border-orange-400 text-orange-500"><FaPaperPlane size={20} /></button>
                    </div>
                    <span className='flex gap-5 text-sm text-start font-extralight w-full'><CiLocationOn size={20} />this is address</span>
                    <span className='flex gap-5 text-sm text-start font-extralight w-full'><CiMobile1 size={20} />+918788987229</span>
                    <span className='flex gap-5 text-sm text-start font-extralight w-full'><CiMail size={20} />rajatrr1152@gmail.com</span>
                    <span className='flex gap-5 text-sm text-start font-extralight w-full'><CiLinkedin size={20} />rajat r1152</span>
                </div>

                <div className="container flex h-fit items-center my-auto mx-auto justify-center w-full md:w-4/12 p-5">
                    <div className="container flex flex-col gap-3 w-3/12">
                        <h1 className="text-xl font-bold">Links</h1>
                        <Link href={'/'} >link</Link>
                        <Link href={'/'} >link</Link>
                        <Link href={'/'} >link</Link>
                        <Link href={'/'} >link</Link>
                    </div>
                    <div className="container flex flex-col gap-3 w-3/12">
                        <h1 className="text-xl font-bold">Links</h1>
                        <Link href={'/'} >link</Link>
                        <Link href={'/'} >link</Link>
                        <Link href={'/'} >link</Link>
                        <Link href={'/'} >link</Link>
                    </div>
                    <div className="container flex flex-col gap-3 w-3/12">
                        <h1 className="text-xl font-bold">Links</h1>
                        <Link href={'/'} >link</Link>
                        <Link href={'/'} >link</Link>
                        <Link href={'/'} >link</Link>
                        <Link href={'/'} >link</Link>
                    </div>

                </div>

            </div>
            <FollowUs />
        </>
    )
}
