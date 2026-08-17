
import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className="grid grid-cols-12 gap-5 min-h-screen">
            <div className="col-span-2 border-r-2 pr-5">
                <p className='bg-linear-60 from-yellow-600 to-yellow-300 py-3 px-4 rounded-2xl font-bold text-2xl'>Dashboard</p>
                <div className="flex flex-col gap-5 mt-10 text-white">
                    <Link className='py-2 px-4 bg-gray-500 rounded-2xl' href="/dashboard/add-provider">Add Provider</Link>
                    <Link className='py-2 px-4 bg-gray-500 rounded-2xl' href="/dashboard/my-profil">My Profile</Link>
                    <Link className='py-2 px-4 bg-gray-500 rounded-2xl' href="/dashboard/settings">Settings</Link>
                </div>

            </div>
            <div className="col-span-10">Welcome to your Dashboard</div>
        </div>
    );
};

export default DashboardLayout;