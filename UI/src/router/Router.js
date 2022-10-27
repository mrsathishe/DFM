import React from 'react';
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from '../containers/Home';
import About from '../containers/About';
import Contact from '../containers/Contact';
import Login from '../containers/Login';
import RouterMenu from './RouterMenu';

const Router = () => {
    return (
        <React.Fragment>
        <React.StrictMode>
            <RouterProvider router={RouterMenu}/>
        </React.StrictMode>
        {/* <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    {/** if you need to use app as common page, you can use other pages inside the tah,
                         * need to mention the outlet tag in app compoenent
                          * /
                    }
                    <Route path='/cows' element={<About />} />
                    <Route path='/person_details' element={<Contact />} />
                    
                </Route>
                {/**
                     * This is for to use the page outside app component, do need to use outlet tag.
                     * /
                }
                <Route path='/contact' element={<Contact /> } />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter> */}
        </React.Fragment>
    )
}

export default Router;