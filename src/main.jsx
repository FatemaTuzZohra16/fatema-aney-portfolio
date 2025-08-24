import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainRoute from './components/MainRoute/MainRoute.jsx'
import About from './components/About/About.jsx';
import Home from './components/Pages/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import CreativeWorks from './components/CreativeWorks/CreativeWorks.jsx';
import { ContactMe } from './components/Pages/ContactMe.jsx';
import Completed from './components/Pages/Completed.jsx';
import BlankRoute from './components/MainRoute/BlankRoute.jsx';

const router = createBrowserRouter([
  { path: "/",
   Component: MainRoute,
   children: [
    { index: true, Component: Home },
    { path: "/about", Component: About },
    { path: "/contact", Component: Contact },
    { path: "/work", Component: CreativeWorks },
   ]
   },
  { path: "/",
   Component: BlankRoute,
   children: [
    { path: "/contactMe", Component: ContactMe },
    { path: "/completed", Component: Completed },
   ]
   },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
