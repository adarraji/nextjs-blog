"use client"
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import styles from "./page.module.css";

const Login = () => {
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", {
            email,
            password,
        });
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Email"
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={styles.input}
                />
                <button className={styles.button}>Login</button>
                {error && "Something went wrong!"}
            </form>
            <button onClick={() => signIn("google")}>Login with Google</button>
        </div>


    )
}

export default Login