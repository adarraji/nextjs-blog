"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import styles from "./page.module.css"
import useSWR from 'swr'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    // const [data, setData] = useState([])
    // const [error, setError] = useState(false)
    // const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLoading(true)
    //         const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: 'no-store' })

    //         if (!res.ok) {
    //             setError(true)
    //         }

    //         const data = await res.json()
    //         setData(data)
    //         setIsLoading(false)
    //     }

    //     getData()
    // }, [])

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)

    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === "loding") {
        return <p>Loading...</p>
    }

    if (status === "unauthenticated") {
        router?.push("/dashboard/login")
    }

    if (status === "authenticated") {
        return (
            <div className={styles.container}>Dashboard</div>
        )
    }


}

export default Dashboard