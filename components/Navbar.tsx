import React from 'react'; 
import Link from 'next/link';
import { RiNextjsFill } from 'react-icons/ri';

const Navbar = () => { 
    return (
        <nav className="z-10 top-4 left-1/2 -translate-x-1/2 fixed flex items-center 
        gap-6 px-6 py-3 rounded-full bg-black/60 backdrop-blur-md border text-white border-zinc-800 w-auto">
            <a href="" className="flex items-center">
                <RiNextjsFill className="text-4xl"></RiNextjsFill>
            </a>

            <div className="flex items-center gap-6">
                <Link href="/" className="hover:text-gray-300 transition-colors text-base font-medium py-1.5">
                    <span>Home</span>
                </Link>

                <Link href="/" className="hover:text-gray-300 transition-colors text-base font-medium py-1.5">
                    <span>Manifesto</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar