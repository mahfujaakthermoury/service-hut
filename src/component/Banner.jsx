"use client"
import React from 'react';
import Title from './Title';
import { useRouter } from 'next/navigation';

const Banner = () => {
    const router = useRouter();
    const handleBtn = () => {
        const password= prompt("Enter you pass");

        if(password == "1234"){
            router.push("/deshboard");
        }
    }
    return (
        <div className='bg-linear-60 from-yellow-500 to-yellow-200 space-y-5 p-20 text-center' >
            <h1 className="text-4xl font-bold">Welcome to Service Hut</h1>
            <button onClick={handleBtn}
                className='bg-amber-800 px-5 py-2 rounded-2xl text-white font-bold cursor-pointer
                hover:bg-black duration-200'>See More</button>
        </div>
    );
};

export default Banner;