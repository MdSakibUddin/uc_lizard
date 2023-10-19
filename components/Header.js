import Image from 'next/image';
import React from 'react';
import logo from '../assets/pic2.png';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="container mx-auto text-center py-4 ">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Image src={logo} height={50}></Image>
                    <h1 className="text-2xl font-bold max-w-[200px] text-left">
                        Arthur Georges Lizard Colony{' '}
                    </h1>
                </div>
                <nav className="inline-block font-semibold ">
                    <Link href="/" className="mr-3" id="homeLink">
                        Home
                    </Link>
                    |
                    <Link href="/about-us" className="ml-3 mr-3" id="aboutLink">
                        About Us
                    </Link>
                    |
                    <Link
                        href="/search_result"
                        className="ml-3"
                        id="discoverLink"
                    >
                        Discover Lizard
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
