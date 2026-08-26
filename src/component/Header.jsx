import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
            <header className="px-20 py-3 border-b-2 border-gray-500 flex justify-between items-center">
                <Link href={"/"} className="text-lg font-semibold"> 🌏 Service Hut</Link>

                <nav className='space-x-10'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/providers">Providers</Link>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                </nav>
            </header>
    );
};

export default Header;