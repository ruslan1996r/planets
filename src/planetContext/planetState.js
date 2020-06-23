import React, { useReducer } from 'react'

import PlanetContext from "./planetContext"
import planetReducer from "./planetReducer"
import planetsJSON from "./planets.json"

export const PlanetState = (props) => {
    const initialState = {
        initPlanets: planetsJSON,
        planets: planetsJSON,
        selectedPlanet: null
    }
    const [state, dispatch] = useReducer(planetReducer, initialState)

    const selectPlanet = (id) => {
        dispatch({
            type: "SELECT_PLANET",
            payload: id
        })
    }
    const findPlanet = (findByString, findParam) => {
        dispatch({
            type: "FIND_PLANET",
            payload: { findByString, findParam }
        })
    }

    const sortPlanets = (sortParam) => {
        let sortedPlanets
        let copy = JSON.stringify(state.planets)
        if (sortParam !== "") {
            sortedPlanets = JSON.parse(copy).sort((a, b) => {
                return b[sortParam][Object.keys(b[sortParam])[0]] - a[sortParam][Object.keys(a[sortParam])[0]]
            })
        } else {
            sortedPlanets = state.initPlanets
        }
        dispatch({
            type: "SORT_PLANET",
            payload: sortedPlanets
        })
    }

    return (
        <PlanetContext.Provider
            value={{
                planets: state.planets,
                selectedPlanet: state.selectedPlanet,
                selectPlanet,
                findPlanet,
                sortPlanets
            }}
        >
            {props.children}
        </PlanetContext.Provider>
    )
}