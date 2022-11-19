import { useState } from 'react';

import './App.css'
import Nav from './Components/Nav'
import ClientList from './Components/ClientList';

function App() {

  return (
    <div className="App">
      <Nav />
      <ClientList />
    </div>
  )
}

export default App
