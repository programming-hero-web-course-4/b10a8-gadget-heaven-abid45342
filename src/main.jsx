import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout.jsx';
import Provider from './provider/Provider.jsx';
import Home from './pages/Home.jsx';
import Details from './pages/Details.jsx';
import DashBoard from './pages/DashBoard.jsx';
import Error from './pages/error.jsx';
import { ToastContainer } from 'react-toastify';
import Offer from './pages/Offer.jsx';
import Statistics from './pages/Statistics.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/details",
        element:<Details></Details>,
        // loader:(params)=>fetch('')

      },
      {
        path:"/dashBoard",
        element:<DashBoard></DashBoard>

      },
      {
        path:"/offer",
        element:<Offer></Offer>

      },
      {
        path:"/stat",
        element:<Statistics></Statistics>
      }
    ]


  },
  {
    path:"*",
    element:<Error></Error>
  },

 

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider>
     <RouterProvider router={router} />
     </Provider>
  </StrictMode>,
)
