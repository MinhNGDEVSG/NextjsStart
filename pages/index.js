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

        <div className={styles.divTask1}>
          <p className={styles.text}>
            * Kiểm tra nhóm, tiếp cận <span>SHILL</span>, giải đáp và tương tác và cho Mods học các yêu cầu sản phẩm.<br/>
            <hr></hr>
            * Kiểm tra kênh, cập nhật các tin tức quan trọng cho sản phẩm or các thông tin liên quan dự án tốt nhất. <br/>
            <hr></hr>
            * Kiểm tra newfed mod chủ, đảm bảo chạy đúng và nếu cần có thể bổ xung thêm nguồn or thay nguồn SHILL chính nếu cần. <br/>
            <hr></hr>
            * Cải thiện các post <span>TW</span> cho các thành viên của họ như: @Guru, @Burn, @Army, @Holders. <br/>
            <hr></hr>
            * Lập ra danh sách SHILL để members có thể tương tác SHILL dự án dưới các TW post nổi tiếng liên quan
              và danh sách cần được bot cập nhật vào nhóm cứ 2 ngày or 3 ngày một lần.
             <br/>
            <hr></hr>
            * Chạy SHILL riêng cho các Raiders dưới post các TW độc đáo nhiều lượt tương tác, ít nhất 5 lần/d. <br/>
            <hr></hr>
            * Kiểm soát và chạy chiến dịch trending cho CMC+CGK+DEXTOOL để PR dự án được đến cộng đồng. <br/>
            <hr></hr>
            * Kiểm tra các ACC chủ của cộng đồng họ như TW, RD, DC, CMC, MDU đảm bảo đăng đúng nói đúng. <br/>
            <hr></hr>
            * Kiểm tra học và đưa ra các chương trình về sản phẩm của họ, thu hút member dùng or hold.
          </p>
        </div>
        <br></br>
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