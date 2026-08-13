import Title from '@/component/Title';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <Title>Welcome to About Page</Title>
            <nav className='space-x-5'>
                <Link href="/about/contact">Contact</Link>
                <Link href="/about/team">Team</Link>

            </nav>
        </div>
    );
};

export default About;