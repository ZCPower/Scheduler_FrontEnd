import { useState } from 'react';

import './App.css'
import Nav from './Components/Nav'
import ClientList from './Components/ClientList';
import TechList from './Components/TechList';

function App() {

  return (
    <div className="App">
      <Nav />
      <TechList />
      <ClientList />
    </div>
  )
}

export default App
