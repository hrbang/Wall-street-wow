import React, { useEffect, useState } from "react"
import Link from 'next/link'
import { Col } from "react-bootstrap"

function EUServers() {
    const [euRealms, setEuRealms] = useState([])

    const fetchDataEU = () => {
        fetch("https://eu.api.blizzard.com/data/wow/realm/index?namespace=dynamic-eu&locale=en_US&access_token=USAnt0rYQZEp9OZqtkiYOgVinCyP7IcBd3")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setEuRealms(data.realms)
            })
    }

    useEffect(() => {
        fetchDataEU()
    }, [])

    console.log(euRealms)

    return (
        <>
            {euRealms.map((server_eu, index) => (
                <Col lg={3} className="mt-3">
                    <Link href="/eu/[server]" as={`/eu/${server_eu.slug}`}>
                        <a className="server_link">
                            <div className="server_link__item">
                                <p className="server_item__region">EU</p>
                                <p className="server_item__name" key={index}>{server_eu.name}</p>
                            </div>
                        </a>
                    </Link>
                </Col>
            ))}
        </>
    )
}

export default EUServers;