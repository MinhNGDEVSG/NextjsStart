import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <Link href="/">
            <a>
              Home Wikipedia
            </a>
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
