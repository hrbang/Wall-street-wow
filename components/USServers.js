import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Col } from "react-bootstrap"

function USServers() {
    const [usRealms, setUsRealms] = useState([])

    const fetchDataUS = () => {
        fetch("https://us.api.blizzard.com/data/wow/realm/index?namespace=dynamic-us&locale=en_US&access_token=UStpcIhgeXnYdYQK4n1PcLLOV2QexjXF2z")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setUsRealms(data.realms)
            })
    }

    useEffect(() => {
        fetchDataUS()
    }, [])

    console.log(usRealms)

    return (
        <>
            {usRealms.map((server_us, index) => (
                <Col lg={3} className="mt-3">
                    <Link href="/us/[server]" as={`/us/${server_us.slug}`}>
                        <a className="server_link">
                            <div className="server_link__item">
                            <p className="server_item__region">US</p>
                                <p className="server_item__name" key={index}>{server_us.name}</p>
                            </div>
                        </a>
                    </Link>
                </Col>
            ))}
        </>
    )
}

export default USServers;