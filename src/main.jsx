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
import Home from './components/pages/Home.jsx';
import Contact from './components/Contact/Contact.jsx';

const router = createBrowserRouter([
  { path: "/",
   Component: MainRoute,
   children: [
    { index: true, Component: Home },
    { path: "/about", Component: About },
    { path: "/contact", Component: Contact },
   ]
   },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
