import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 AD DEV. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="AD DEV Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="AD DEV" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="AD DEV" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="AD DEV" />
      </div>
    </div>
  )
}

export default Footer