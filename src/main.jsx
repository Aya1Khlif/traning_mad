import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import MyCars from './Pages/Home/MyCars/MyCars.jsx';
import Details from './Pages/Details/Details.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path: "/",
        element: <Home/> ,
      
      },
      {
        path: "mycar",
        element: <MyCars/>,
      },
      {
        path: "detalis",
        element: <Details/>,
      },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
