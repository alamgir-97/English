import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import AddCoffee from './components/AddCoffee.jsx'
// import UpdateCoffee from './components/UpdateCoffee.jsx'
import Route from './Routes/Route';




// const router = createBrowserRouter([

// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={Route}></RouterProvider>

  </React.StrictMode>,
)
