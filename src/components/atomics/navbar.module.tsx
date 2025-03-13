'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {

    const router = useRouter()

    function navigate(pathname: string) {
        router.push(pathname)
    }
    return (
        <nav className="w-screen h-20 bg-black p-5 flex fixed top-0 gap-5 justify-between items-center text-white text-semibold z-10 ">
            <div className="my-3">
                <span className="font-semibold text-lg" onClick={() => navigate("/")}>
                    <Image src="/sah.png" alt="Company Logo" width={80} height={150}/>
                </span>
            </div>
            <div className="my-3 flex gap-x-5">
                <span className="text-slate-100 hover:text-slate-300" onClick={() => navigate('/about-us')}>About Us</span>
                <span className="text-slate-100 hover:text-slate-300" onClick={() => navigate('/products')}>Our Products</span>
                <span className="text-slate-100 hover:text-slate-300" onClick={() => navigate('/teams')}>Our Teams</span>
            </div>
        </nav>
    )
}