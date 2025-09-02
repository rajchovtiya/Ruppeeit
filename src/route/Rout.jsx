import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/landingpage/Home'
import Footer from '../components/Footer'
import BecomeHomepage from '../pages/BecomeaCreator/BecomeHomepage'
import ClientOnboardingForm from '../components/ClientOnboardingForm'
import Blogs from '../pages/Blogs/Blogs'
import BlogDetail from '../pages/Blogs/BlogDetail'

function Rout() {
    const [isOpen, setIsOpen] = useState(false)
    const [fromslow, setFromslow] = useState(false);

    return (
        <div>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} setFromslow={setFromslow} />
            <ClientOnboardingForm fromslow={fromslow} setFromslow={setFromslow} />
            <Routes>
                <Route path='/' element={<Home setFromslow={setFromslow} />} />
                <Route path='/BecomeaCreator' element={<BecomeHomepage />} />
                <Route path='Blogs' element={<Blogs />} />
                <Route path="/blogs/:url" element={<BlogDetail />} />

            </Routes>
            <Footer />
        </div>
    )
}

export default Rout
