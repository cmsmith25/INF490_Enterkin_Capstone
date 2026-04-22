"use client";

import {useState} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const [open, setOpen] = useState(false);

    const pathname = usePathname();

    //Checks if on home page
    const isHome = pathname === "/";

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className={`logo ${isHome ? "logo-home" : ""}`}>First Baptist Church of Norwich</div>

                {/*Hamburger*/}
                <div className="hamburger" onClick={() => setOpen(!open)}>
                    ☰
                    </div>
                    </div>
                
                {/*Dropdown menu*/}
                {open && (
                <div className={`menu ${open ? "active" : ""}`}>
                    <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link href="/about" onClick={()=> setOpen(false)}>About</Link>
                    <Link href="/bulletins" onClick={()=> setOpen(false)}>Bulletin</Link>
                    <Link href="/prayer" onClick={()=> setOpen(false)}>Prayer Request</Link>
                    <Link href="/sermons" onClick={()=> setOpen(false)}>Sermons</Link>
                    <Link href="/offerings" onClick={()=> setOpen(false)}>Offerings</Link>
                    <Link href="/contact" onClick={()=> setOpen(false)}>Contact Us</Link>
                </div>
                )}
        </nav>
    );
}