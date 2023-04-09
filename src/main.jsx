import React, { children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Component/About/About';
import Manage from './Component/Manage/Manage';
import Home from './Component/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <h2>errrrrrrrrrrrrrrr</h2>,
  

  children: [
    {
      path: '/',
      element: <Home></Home>,
      loader:()=>fetch('Tshirts.json')
    
    },
    {
      path: '/about',
      element: <About></About>,
    
    },
    {
      path: '/manage',
      element:<Manage></Manage>,
    },
  ],

},
])

  // children : [
  //   {
  //     path: '/about',
  //     element: <About></About>,
  //   },
  // ]
  //   ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
