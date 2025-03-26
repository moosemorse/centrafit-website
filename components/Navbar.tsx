import React from 'react'; 
import Link from 'next/link';
import { RiNextjsFill } from 'react-icons/ri';

const Navbar = () => { 
    return (
        <nav className="z-10 top-14 left-1/2 -translate-x-1/2 fixed flex items-center 
        gap-5 py-2 px-4 rounded-full bg-black/60 backdrop-blur-md border text-white border-zinc-800">
            <a href="">
                <RiNextjsFill className="text-4xl"></RiNextjsFill>
            </a>

            <Link href="/" className="hover:text-gray-300 transition-colors">
            <span>Home</span>
            </Link>

            <Link href="/" className="hover:text-gray-300 transition-colors">
            <span>Manifesto</span>
            </Link>

        </nav>
    )
}

export default Navbar