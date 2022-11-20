import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import App from './App'
import AddTech from './Components/AddTech';
import AddPatient from './Components/AddPatient';
import './index.css'
import Schedule from './Components/Schedule';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'addTech',
        element: <AddTech />
      },
      {
        path: 'addPatient',
        element: <AddPatient />
      },
      {
        path: 'schedule',
        element: <Schedule />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
