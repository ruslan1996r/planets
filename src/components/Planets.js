import React, { useContext } from 'react'

import Planet from "./Planet"
import planetContext from "../planetContext/planetContext"
import PlanetInfo from './PlanetInfo'

function Planets() {
    const { planets, selectPlanet, selectedPlanet } = useContext(planetContext)

    // function x(index) {
    //     let promise = new Promise(function (resolve, reject) {
    //         setTimeout(function () {
    //             resolve('done!');
    //         }, (index + 1) * 200);
    //     });
    //     return promise;
    // }

    return (
        <div className="planets">
            {planets.length ? planets.map((planet, i) => {
                {/* const r = x(i).then(res => console.log(res, "res??")) */ }
                return (
                    <Planet
                        i={i}
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



// import React, { useContext } from 'react'

// import Planet from "./Planet"
// import planetContext from "../planetContext/planetContext"
// import PlanetInfo from './PlanetInfo'

// function Planets() {
//     const { planets, selectPlanet, selectedPlanet } = useContext(planetContext)
//     return (
//         <div className="planets">
//             {planets.length ? planets.map(planet => {
//                 return (
//                     <Planet
//                         key={planet.id}
//                         planet={planet}
//                         selectPlanet={selectPlanet}
//                     />
//                 )
//             }) : <h2>Nothing found</h2>}
//             {selectedPlanet && <PlanetInfo
//                 selectedPlanet={selectedPlanet}
//                 selectPlanet={selectPlanet}
//             />}
//         </div>
//     )
// }

// export default Planets
