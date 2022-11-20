import { useState } from 'react';
import './App.css'
import Nav from './Components/Nav'
import Schedule from './Components/Schedule';
import AddTech from './Components/AddTech';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import AddPatient from './Components/AddPatient';



function App() {

  return (
    <div className="App">

      {/* <RouterProvider router={router} > */}
      <Nav />
      <Outlet context />
      {/* <Schedule />
      <AddTech /> */}
      {/* <AddPatient /> */}

    </div>
  )
}

export default App
