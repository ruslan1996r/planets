import React from 'react'

function PlanetInfo({ selectPlanet, selectedPlanet: {
    name,
    distanceFromSun,
    lengthOfYear,
    moons,
    description,
    equatorialRadius,
    surfaceGravity,
    atmosphericConstituents,
    img = "",
} }) {

    const toSelectPlanet = () => {
        selectPlanet(null)
    }

    return (
        <div className="planet-info">
            <div>
                <h1>{name}</h1>
                <a href="#header" onClick={() => toSelectPlanet()}>
                    <h4 id="close">×</h4>
                </a>
            </div>
            <div>
                <img src={img} alt={name} />
                <div className="info-container">
                    <h3>Distance from sun: {distanceFromSun.value} <span>{distanceFromSun.unit}</span></h3>
                    <h3>length of year: {lengthOfYear.value} <span>{lengthOfYear.unit}</span></h3>
                    <h3>Equatorial radius: {equatorialRadius.value} <span>{equatorialRadius.unit}</span></h3>
                    <h3>Surface gravity radius: {surfaceGravity.value} <span>{surfaceGravity.unit}</span></h3>
                    <p>{description}</p>
                </div>
                <div className="info-container">
                    <h3>Atmospheric constituents:</h3>
                    <ul>
                        {atmosphericConstituents.list.length ? atmosphericConstituents.list.map((a, i) => {
                            return <li key={i}>{a}</li>
                        }) : <p className="empty">No atmosphere</p>}
                    </ul>
                    <h3>Moons: {moons.count}</h3>
                    <ul>
                        {moons.list.length ? moons.list.map((a, i) => {
                            return <li key={i}>{a}</li>
                        }) : <p className="empty">No moons</p>}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default PlanetInfo
