import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Notfound() {
    const router = useRouter(); // mean call router ra để dùng;
    
    // useEffect => mean sau khi loading xong pages nay no se gọi đến method này chạy: useEffect;
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    });

    return (
        <div className='not-found'>
            <h1>
                Oooops....
            </h1>
            <h2>
                can not find this pages
            </h2>
            <p>
                Going back to the link
                <Link href="/">
                    <a>Home pages</a>
                </Link>
                in the 3 seconrd
            </p>
        </div>
    )
}
