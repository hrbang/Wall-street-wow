import React from "react"

function Headline({title, subtitle}) {
    return (
        <div className="headline">
            <h1 className="title">{title}</h1>
            <p className="text">{subtitle}</p>
        </div>
    )
}
export default Headline;
