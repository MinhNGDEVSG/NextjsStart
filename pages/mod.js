import React from 'react'
import Head from 'next/head';

export default function Mod() {
  return (
    <>
      <Head>
        <title>Management | Mods</title>
        <meta name="keywords" content='Mod working' />
      </Head>
      <div>
        <h1>
          Mods working
        </h1>
        <p> 
         * Kiểm soát thành viên làm trong sạch cộng đồng. <br></br>
         * Luôn theo sát member ngăn chặn báo cáo cuộc tấn công nếu có.  <br></br>
         * Ban, kick tùy ý nếu thấy member quá kích có dấu hiệu tấn công xấu.  <br></br>
         * Đề xuất các giải pháp nếu có để quản lý cộng đồng tốt hơn, or thu hút members.  <br></br>
        </p>
        <span>Happy day!</span>
      </div>
    </>
  )
}
