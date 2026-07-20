"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [navi, setNavi] = useState(false);

    return (
        <nav className="navbar">

            <div className="logo">
             <Image
              src="/music_note.png" 
              alt="A single Quater Musical Note" 
              width={350}
              height={200}
              className = "music-logo"
             />
            </div>

            <div className="space"></div>

            <ul className= {navi ? "nav-links active" : "nav-links"}>
                <li><a href="#Hero">Home</a></li>
                <li><a href="#Playlist">Playlist</a></li>
            </ul>

            <div className="navi-icon" onClick={() => setNavi(!navi)}>
                ☰
            </div>

        </nav>
    );
}
