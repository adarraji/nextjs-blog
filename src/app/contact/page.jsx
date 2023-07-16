import React from "react"
import styles from "./page.module.css"
import Image from "next/image"
import Button from "@/components/button/Button"

export const metadata = {
    title: "AD DEV Contact",
    description: "This is Contact page",
}

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Let's Keep in Touch</div>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image src="/contact.png" alt="" fill={true} className={styles.image} />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="name" className={styles.input} />
                    <input type="text" placeholder="email" className={styles.input} />
                    <textarea className={styles.textArea} placeholder="message" cols="30" rows="10"></textarea>
                    <Button url="#" text="Send" />
                </form>
            </div>
        </div>

    )
}

export default Contact