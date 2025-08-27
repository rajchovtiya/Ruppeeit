import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/landingpage/Home'
import Footer from '../components/Footer'
import BecomeHomepage from '../pages/BecomeaCreator/BecomeHomepage'

function Rout() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/becomeHomepage' element={<BecomeHomepage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Rout
