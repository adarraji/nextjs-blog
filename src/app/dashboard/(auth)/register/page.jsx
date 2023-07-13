"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Register = () => {

    const [error, setError] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value

        const res = await fetch("/api/auth/resgiter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })

        res.status === 201 && router.push("/dashboard/login?success=Account has been created")

        try {

        } catch (err) {
            setError(true)
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="username" className={styles.input} required />
                <input type="email" placeholder="email" className={styles.input} required />
                <input type="password" placeholder="password" className={styles.input} required />
                <button className={styles.button}>Register</button>
            </form>
            {error && "Something went wrong!"}
            <Link href="/dashboard/login">Login with an existing account</Link>
        </div>
    )
}

export default Register