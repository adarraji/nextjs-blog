import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import { notFound } from 'next/navigation'


async function getData(id) {
    const res = await fetch(`${process.env.BASE_URL}/posts/${id}`, { cache: 'no-store' })

    if (!res.ok) {
        return notFound()
    }

    return res.json()
}

const BlogPost = async ({ params }) => {
    const data = await getData(params.id)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus ipsam quam nisi, dolorum velit quod tempore debitis fugit obcaecati ratione expedita error optio ut magnam odit nam sapiente impedit.</p>
                    <div className={styles.author}>
                        <Image className={styles.avatar} height={40} width={40} src="https://images.pexels.com/photos/16770473/pexels-photo-16770473/free-photo-of-hand-holding-clove.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=loads" alt="" />
                        <span className={styles.username}>John Doe</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} fill={true} src="https://images.pexels.com/photos/13881115/pexels-photo-13881115.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed reiciendis tenetur, inventore totam ducimus nemo architecto in id incidunt accusamus recusandae ad explicabo blanditiis facere porro veniam assumenda! Et, minus.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed reiciendis tenetur, inventore totam ducimus nemo architecto in id incidunt accusamus recusandae ad explicabo blanditiis facere porro veniam assumenda! Et, minus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed reiciendis tenetur, inventore totam ducimus nemo architecto in id incidunt accusamus recusandae ad explicabo blanditiis facere porro veniam assumenda! Et, minus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed reiciendis tenetur, inventore totam ducimus nemo architecto in id incidunt accusamus recusandae ad explicabo blanditiis facere porro veniam assumenda! Et, minus.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed reiciendis tenetur, inventore totam ducimus nemo architecto in id incidunt accusamus recusandae ad explicabo blanditiis facere porro veniam assumenda! Et, minus.
                    <br />
                    <br />
                </p>
            </div>
        </div>
    )
}

export default BlogPost