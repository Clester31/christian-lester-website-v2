/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client"

import { useState } from "react";

export default function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        './pictures_of_me/1.png',
        './pictures_of_me/2.png',
        './pictures_of_me/3.png',
        './pictures_of_me/4.png',
        './pictures_of_me/5.png',
        './pictures_of_me/6.png',
        './pictures_of_me/7.png',
    ]

    return (
        <div className="flex flex-row justify-center items-center">
            <button
                className="bg-tan1 text-sm w-8 h-8 sm:bg-tan1 w-16 h-16 text-black text-2xl font-bold rounded-full mx-8 hover:bg-tan2 transition 150 ease-in"
                onClick={() => setCurrentIndex(prev => (prev - 1 + images.length) % images.length)}
            >
                L
            </button>
            <div className="flex flex-row gap-16 transition 500 ease-in-out">
                <img className="hidden sm:flex" src={images[(currentIndex - 1 + images.length) % images.length]} style={{ width: 320, height: 320, objectFit: 'cover', opacity: 0.5 }} />
                <img src={images[currentIndex]} alt="center image" style={{ width: 320, height: 320, objectFit: 'cover', opacity: 1 }} />
                <img className="hidden sm:flex" src={images[(currentIndex + 1) % images.length]} alt="right image" style={{ width: 320, height: 320, objectFit: 'cover', opacity: 0.5 }} />
            </div>
            <button
                className="bg-tan1 text-sm w-8 h-8 sm:bg-tan1 w-16 h-16 text-black text-2xl font-bold rounded-full mx-8 hover:bg-tan2 transition 150 ease-in"
                onClick={() => setCurrentIndex(prev => (prev + 1) % images.length)}
            >
                R
            </button>
        </div>
    )
}