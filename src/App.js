import React from 'react';
import "./styles/planets.css"

import { PlanetState } from "./planetContext/planetState"
import Planets from "./components/Planets"
import Filter from "./components/Filter"

function App() {
  return (
    <PlanetState>
      <Filter />
      <Planets />
    </PlanetState>
  );
}

export default App;
