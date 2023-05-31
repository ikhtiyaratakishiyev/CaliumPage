import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {routes} from './Routes/router'
import './Components/Style/recet.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <RouterProvider
 
 router={routes}
 
 />
);
