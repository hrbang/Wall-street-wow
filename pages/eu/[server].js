import React from "react"
import { useRouter } from 'next/router'

export default function Server() {
    const router = useRouter()
    const {server } = router.query

    return <p>EU Server: {server}</p>
}
