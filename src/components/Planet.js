import React, { useEffect, useState } from 'react'

function Planet({
    i,
    selectPlanet,
    planet: {
        id,
        name,
        distanceFromSun,
        moons,
        equatorialRadius,
        atmosphericConstituents: { list },
        img = ""
    } }) {
    const [styles, setStyles] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setStyles(['300', '16'])
        }, (i + 1) * 70)
    }, [i])
    return (
        <div
            className="planet"
            style={{
                fontSize: styles[1] + 'px',
                width: styles[0] + 'px',
                height: styles[0] + 'px',
                backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${img})`
            }}>
            <a href="#close" onClick={() => selectPlanet(id)}><h2 style={{ fontSize: (styles[1] * 2) + 'px' }}>{name}</h2></a>
            <p>Atmospheric constituents</p>
            <ul>
                {list.length ? list.map((a, i) => {
                    return <li key={id + i}>{a}</li>
                }) : <p className="empty">No atmosphere</p>}
            </ul>
            <div style={{ display: "block" }}>
                <p>Distance from sun: {distanceFromSun.value}</p>
                <p>Equatorial radius: {equatorialRadius.value}</p>
                {moons.count ? <p>Moons: {moons.count}</p> : <p className="empty">No moons</p>}
            </div>
        </div>
    )
}

export default Planet
