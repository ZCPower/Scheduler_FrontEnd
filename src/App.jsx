import { useState } from 'react';

import './App.css'
import Nav from './Components/Nav'
import ClientList from './Components/ClientList';
import TechList from './Components/TechList';
import Schedule from './Components/Schedule';
import AddTech from './Components/AddTech';

function App() {

  return (
    <div className="App">
      <Nav />
      <Schedule />
      <AddTech />
    </div>
  )
}

export default App
