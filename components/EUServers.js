import React, { useEffect, useState } from "react"
import useSWR from 'swr';
import Link from "next/link"
import { Col } from "react-bootstrap"

function EUServers() {
    const fetcher = (url) => fetch(url).then((r) => r.json())
    const { data } = useSWR("/api/getEuRealms", fetcher)

    console.log(data?.connectedRealm)

    return (
        <>
            {/* {data?.connectedRealm.map((realm) => {
                return (
                    <Col lg={3} className="mt-3">
                        <Link href="/eu/[server]" as={`/eu/${realm.slug}`}>
                            <a className="server_link">
                                <div className="server_link__item">
                                    <p className="server_item__region">EU</p>
                                    <p className="server_item__name" key={index}>
                                        {realm.name}
                                    </p>
                                </div>
                            </a>
                        </Link>
                    </Col>
                )
            })} */}
        </>
    )
}

export default EUServers
