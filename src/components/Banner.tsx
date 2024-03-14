'use client'
import React, { useState } from 'react'
import styles from './banner.module.css'
import Image from 'next/image'


export default function Banner() {
  const covers = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg"];
  const [index,setIndex] = useState(0);



  return (
    <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
        <Image src={covers[index%3]} alt='cover' fill={true} objectFit='cover' priority/>
        <div className={styles.bannerText}>
            <h1 className="text-4xl font-medium">Your travel Partner</h1>
            <h3 className='text-xl font-serif'>Explore Your World with Us</h3>
        </div>
    </div>
  )
}

