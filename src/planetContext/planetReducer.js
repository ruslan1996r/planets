export default (state, { type, payload }) => {
    switch (type) {
        case "SELECT_PLANET":
            return {
                ...state,
                selectedPlanet: state.planets.find(planet => planet.id === payload)
            }
        case "FIND_PLANET":
            return {
                ...state,
                planets: state.initPlanets.filter(planet => {
                    if (typeof planet[payload.findParam] === "object") {
                        return planet[payload.findParam].list
                            .join(' ')
                            .toUpperCase()
                            .includes(payload.findByString.toUpperCase())
                    } else {
                        return planet[payload.findParam]
                            .toUpperCase()
                            .includes(payload.findByString.toUpperCase())
                    }
                }
                )
            }
        case "SORT_PLANET":
            return {
                ...state,
                planets: payload
            }
        default:
            break;
    }
}