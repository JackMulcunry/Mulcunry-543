'use client';
import React from "react";
import ButtonUI from "./ui/button";
import { BsEmojiSunglasses } from "react-icons/bs";

const Header:React.FC = () => {
    return (
        <header className="bg-fuchsia-600 p-8 text-white flex items-center justify-between">
            <div className="w-32">
                <BsEmojiSunglasses />
            </div>
            <h1>My App</h1>
            <nav className="flex gap-4">
                <div>
                    <ButtonUI />
                </div>
                <div>
                    <ButtonUI />
                </div>
                <div>
                    <ButtonUI />
                </div>
            </nav>
        </header>
    )
}

export default Header;