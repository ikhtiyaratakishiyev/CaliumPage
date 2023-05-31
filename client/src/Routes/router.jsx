import {createBrowserRouter} from 'react-router-dom'

import HomePage from "../Pages/HomePage"
import AboutPage from "../Pages/AboutPage"
import ContactPage from "../Pages/ContactPage"

export const routes = createBrowserRouter([
    {
        path:"/",
        element: <HomePage/>,
      },
      {
        path:"/about",
        element: <AboutPage />,
      },
      {
        path:"/contact",
        element: <ContactPage />,
      }
    
])