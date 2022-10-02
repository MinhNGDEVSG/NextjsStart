import React from 'react'
import Head from 'next/head';
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>Coder Wikipedia | About</title>
        <meta name="keywords" content='coders about' />
      </Head>
      <div>
        <h1 className={styles.title}>
          About pages
        </h1>
        <p className={styles.text}>
          This is a small website that manages the Shill operation process for token, crypto, 
          game, nft projects... the function of mods must ensure that they do their daily tasks 
          correctly, check the entire function box see What is New?
        </p>

        <span>Happy day!</span>
      </div>
    </>
  )
}
