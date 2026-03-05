'use client';
import React from "react";
import ButtonUI from "./ui/button";
import { BsEmojiSunglasses } from "react-icons/bs";
import Link from 'next/link'

const Header:React.FC = () => {
    return (
        <header className="bg-fuchsia-600 p-8 text-white flex items-center justify-between">
            <div className="w-32">
                <BsEmojiSunglasses />
            </div>
            <h1>My App</h1>
            <nav className="flex gap-4">
                <Link href="/">
                    <button className="bg-cyan-500 px-6 py-2 rounded flex items-center gap-2">
                        HOME
                    </button>
                </Link>
                <Link href="/about">
                    <button className="bg-cyan-500 px-6 py-2 rounded flex items-center gap-2">
                        ABOUT
                    </button>
                </Link>
            </nav>
        </header>
    )
}

export default Header;