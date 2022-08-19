import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    {/** if you need to use app as common page, you can use other pages inside the tah,
                         * need to mention the outlet tag in app compoenent
                          */
                    }
                    <Route path='about' element={<About />} />
                </Route>
                {/**
                     * This is for to use the page outside app component, do need to use outlet tag.
                     */
                }
                <Route path='/contact' element={<Contact /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;