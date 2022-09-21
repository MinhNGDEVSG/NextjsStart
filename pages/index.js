import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';


export default function Home() {

  const [isLoading, setLoading] = useState('Loading...');   // phải bên trong function export;

  // useEffect => mean sau khi loading xong pages nay no se gọi đến method này chạy: useEffect;
  useEffect(() => {
    setTimeout(() => {
      setLoading('Welcome Home');
    }, 2000);
  });


  return (
    <>
      <Head>
        <title>Coder Wikipedia | Home</title>
        <meta name="keywords" content='coders codexx' />
      </Head>

      <h1 className={styles.title}>
        {isLoading}
      </h1>
      <p className={styles.text}>
        We use cookies to enhance your experience on our website. This website uses cookies that provide targeted
        advertising and which track your use of this website. By clicking
        ‘continue’ or by continuing to use our website, you are agreeing
        to our use of cookies. You can change your cookie settings at any
        time. Tìm hiểu thêm.
      </p>

      <Link href="/coders">
        <a className='btn'>See All Coders</a>
      </Link>

      <style jsx>
        {
          `
  .btn{
    display: block;
    width: 150px;
    padding: 8px 0;
    margin: 20px auto;
    background: #ffbf50;
    boder-radius: 4px;
    color: black;
    text-align: center;
  }
  `
        }
      </style>
    </>
  )
}



    // "dev": "next dev", dùng khi code local (npm run dev)
    // "build": "next build", dùng khi build next => html (npm run build)
    // "start": "next start", dùng khi chạy dự án thật (pm2 start npm --name "yourApp" -- start -- --port 5000)