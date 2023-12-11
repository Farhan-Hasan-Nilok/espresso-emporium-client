import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Add from './components/AddCoffee.jsx';
import ViewCoffee from './components/ViewCoffee.jsx';
import EditCoffee from './components/EditCoffee.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'add',
    element: <Add />
  },
  {
    path: 'view/:id',
    element: <ViewCoffee />,
    loader: ({ params }) => fetch(`http://localhost:3000/display-coffee/${params.id}`)
  },
  {
    path: 'edit/:id',
    element: <EditCoffee />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
