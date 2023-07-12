import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
    return (
        <div className={styles.mainContainer}>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg" alt="" width={400} height={250} className={styles.image} />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg" alt="" width={400} height={250} className={styles.image} />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg" alt="" width={400} height={250} className={styles.image} />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
        </div>
    )
}

export default Blog