import React, { useEffect, useState } from "react"
import Link from 'next/link'
import { Col } from "react-bootstrap"

function ItemList() {
    const [items, setItems] = useState([])

    const fetchDataItems = () => {
        fetch("")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setEuRealms(data.realms)
            })
    }

    useEffect(() => {
        fetchDataItems()
    }, [])

    console.log(items)

    return (
        <>
            <div></div>
        </>
    )
}

export default ItemList;