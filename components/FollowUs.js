import React from 'react'
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function FollowUs() {
    return (
        <div className="container w-full bg-[#262627] border-t border-gray-900 p-5">
            <div className="w-fit mx-auto flex gap-6">
                <FaFacebookF className='cursor-pointer text-4xl p-2 rounded-full border border-white' color='white' />
                <FaTwitter className='cursor-pointer text-4xl p-2 rounded-full border border-white' color='white' />
                <FaGoogle className='cursor-pointer text-4xl p-2 rounded-full border border-white' color='white' />
                <FaYoutube className='cursor-pointer text-4xl p-2 rounded-full border border-white' color='white' />
                <FaLinkedinIn className='cursor-pointer text-4xl p-2 rounded-full border border-white' color='white' />
                <FaPinterestP className='cursor-pointer text-4xl p-2 rounded-full border border-white' color='white' />
            </div>
        </div>
    )
}
