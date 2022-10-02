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
      setLoading('SHILL MANAGEMENT');
    }, 2000);
  });


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Coder Wikipedia | Home</title>
        <meta name="keywords" content='coders codexx' />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous" />
      </Head>

      <h1 className={styles.title}>
        {isLoading}
      </h1>
      <div className={styles.subtitle}>
        <h5>Website shill projects of mods</h5>
      </div>

      <div className='wapper-menu'>

        <Link href="/shill">
          <a className={styles.btnMenu}>Shiller Run</a>
        </Link>

        <Link href="/mod">
          <a className={styles.btnMenu}>Mods work</a>
        </Link>

        <Link href="/raider">
          <a className={styles.btnMenu}>Raiders post</a>
        </Link>

        <Link href="/leader">
          <a className={styles.btnMenu}>Leader marketing</a>
        </Link>

        <Link href="/hero">
          <a className={styles.btnMenu}>Hero Inspiration</a>
        </Link>

        <Link href="/burn">
          <a className={styles.btnMenu}>Burn Excited</a>
        </Link>

        <Link href="/company">
          <a className={styles.btnCom}>Company Product/Platform</a>
        </Link>
      </div>
      
      <div className='wapper-guide-text'>
       Good morning, wish you all the best! <br /> <br />
       <p className={styles.text}>
          Hãy kiểm tra nhiệm vụ của bạn đúng trang và làm mọi thứ theo hướng dẫn chung
          nó sẽ có thời gian, rule, cách thức làm và gợi ý cách làm cụ thể.
       </p> <br/>
       <p className={styles.text}>
          Nhiệm vụ dễ nhất chính là Shill và Shill cũng chính là nhiệm vụ nhiều nhất 
          và hỗ trợ gần như cho toàn bộ các chức năng khác của dự án.
       </p><br/>

       <p className={styles.text}>
        Chúc tất cả các bạn một ngày làm việc hiệu quả nhất!
       </p><br/>
      </div>
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
  .wapper-menu{
    width: 20%;
    float: left;
  }
  
  .wapper-guide-text{
    width: 80%;
    float: right;
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