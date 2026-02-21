'use client';
import React from "react";
import { BsEmojiSunglasses } from "react-icons/bs";

const Aside:React.FC = () => {
    return (
        <aside className="bg-cyan-500 w-80 p-8 text-white flex items-center justify-center">
            <h1>Aside</h1>
            <BsEmojiSunglasses />
        </aside>
    )
}

export default Aside;