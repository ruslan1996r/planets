import React, { useContext, useState } from 'react'

import planetContext from "../planetContext/planetContext"

function Filter({ refClose }) {
    const { findPlanet, sortPlanets } = useContext(planetContext)
    const [findString, setFindString] = useState("")
    const [sortBy, setSortBy] = useState("")
    const [findBy, setFindBy] = useState("name")
    const [sortOptions, setSortOptions] = useState([
        { optionName: "No criterion", option: "" },
        { optionName: "Equatorial radius", option: "equatorialRadius" },
        { optionName: "Distance from sun", option: "distanceFromSun" },
        { optionName: "Moons", option: "moons" }
    ])

    const find = (str) => {
        setFindString(str)
        findPlanet(str, findBy) //name or atmosphericConstituents
    }

    const sort = (str) => {
        setSortBy(str)
        sortPlanets(str)
    }

    const changeRadio = (val) => {
        setFindBy(val)
    }

    const closeInfo = () => {
        find("")
    }

    return (
        <div ref={refClose} className="filter">
            <h1>Planets</h1>
            <input
                className="findField"
                value={findString}
                placeholder="Find planet"
                onChange={e => find(e.target.value)}
            />
            {findString && <i onClick={() => closeInfo()}>×</i>}
            <fieldset>
                <input
                    type="radio"
                    name="find"
                    value="name"
                    onChange={e => changeRadio(e.target.value)}
                    defaultChecked={true}
                    id="name"
                />
                <label htmlFor="name">Find by name</label>
                <input
                    type="radio"
                    name="find"
                    value="atmosphericConstituents"
                    onChange={e => changeRadio(e.target.value)}
                    id="atmosphericConstituents"
                />
                <label htmlFor="atmosphericConstituents">Find by atm. constituents</label>
            </fieldset>
            <select value={sortBy} onChange={e => sort(e.target.value)}>
                {sortOptions.map(s => <option key={s.option} value={s.option}>{s.optionName}</option>)}
            </select>
        </div>
    )
}

export default Filter
