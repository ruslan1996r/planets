import React from 'react'

function Planet({ selectPlanet,
    planet: {
        id,
        name,
        distanceFromSun,
        moons,
        equatorialRadius,
        atmosphericConstituents: { list },
        img = ""
    } }) {
    return (
        <div
            onClick={() => selectPlanet(id)}
            className="planet"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${img})`
            }}>
            <h2 >{name}</h2>
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
