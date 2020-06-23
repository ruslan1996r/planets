import React, { useContext } from 'react'

import Planet from "./Planet"
import planetContext from "../planetContext/planetContext"
import PlanetInfo from './PlanetInfo'

function Planets() {
    const { planets, selectPlanet, selectedPlanet } = useContext(planetContext)
    return (
        <div className="planets">
            {planets.length ? planets.map(planet => {
                return (
                    <Planet
                        key={planet.id}
                        planet={planet}
                        selectPlanet={selectPlanet}
                    />
                )
            }) : <h2>Nothing found</h2>}
            {selectedPlanet && <PlanetInfo
                selectedPlanet={selectedPlanet}
                selectPlanet={selectPlanet}
            />}
        </div>
    )
}

export default Planets
