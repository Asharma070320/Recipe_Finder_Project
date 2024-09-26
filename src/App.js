import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Details from './Pages/Details'

const App = () => {
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      errorElement: <h2>Error 404</h2>,
      children: [
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/signup',
          element:<Signup />
        },
        {
          path:'/login',
          element:<Login />
        },
        {
          path:'/cart',
          element:<Cart />
        },{
          path: "/details/:recipeId",
          element: <Details />
        }
      ]
    }
  ])
  return (
    <div>
     <RouterProvider router={routes} />
    </div>
  )
}

export default App
