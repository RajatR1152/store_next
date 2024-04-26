'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

export default function ProductPath() {

    const params = useParams();

    return (
        <div className="container w-full p-5">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Link href="#" className="hover:underline hover:text-gray-600">Home</Link>
                <span>
                    <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </span>
                <Link href={'/store'} className="hover:underline hover:text-gray-600">products</Link>

                <span>
                    <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </span>

                <Link href={'/store'} className="hover:underline hover:text-gray-600">{params?.category[0]}</Link>
                <span>
                    <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </div>
    )
}
