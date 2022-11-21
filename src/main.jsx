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
import ErrorPage from './Components/ErrorPage';
import ModifyTechs from './Components/ModifyTechs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
      },
      {
        path: 'editTechs',
        element: <ModifyTechs />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
