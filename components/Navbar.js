import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import stylesNAV from '../styles/Navbar.module.css';
//picture tĩnh
import Logo from "../public/logo.png";


export default function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <Link href="/">
            <div style={logo}>
              <Image src={Logo} alt="logo" />
            </div>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/coders">
            <a>All coders</a>
          </Link>
        </div>
      </nav>
    </div>
  )
}


const logo = {
  width: "100px",
  height: "100px",
  cursor: "pointer",
};
