import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar({ setIsOpen, isOpen, setFromslow }) {
    return (
        <nav className="flex items-center justify-between padding py-4 relative z-[10000] h-auto">
            {/* Logo */}
            <NavLink to={'/'}>
                <img src="./img/logoru.png" alt="Logo" className='max-w-[120px] sm:max-w-[150px]' />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex border border-primary items-center gap-5 text-secondri py-2 px-6 md:px-10 rounded-3xl justify-between navboxsedo w-auto">
                <NavLink to={'/becomeHomepage'} className='font-light cursor-pointer'>Become a Creator</NavLink>
                <NavLink to={'/blogs'} className='font-light cursor-pointer'>Blogs</NavLink>
            </div>

            {/* Desktop Button */}
            <button className="hidden md:flex text-secondri font-light px-6 md:px-8 py-2 rounded-3xl border bg-[#0E0D05] border-primary navboxsedo items-center justify-center" onClick={() => setFromslow(true)}>
                Join Waitlist
            </button>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes className="text-2xl text-secondri" /> : <FaBars className="text-2xl text-secondri" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[#0E0D05] border-t border-primary text-secondri flex flex-col items-center gap-4 py-4 md:hidden z-[700]">
                    <NavLink
                        to={'/becomeHomepage'}
                        onClick={() => setIsOpen(false)}
                        className='font-light cursor-pointer'
                    >
                        Become a Creator
                    </NavLink>
                    <NavLink
                        to={'/blogs'}
                        onClick={() => setIsOpen(false)}
                        className='font-light cursor-pointer'
                    >
                        Blogs
                    </NavLink>
                    <button className="text-secondri font-light px-6 py-2 rounded-3xl border border-primary navboxsedo"
                        onClick={() => {
                            setFromslow(true)
                            setIsOpen(false)
                        }}>
                        Join Waitlist
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navbar
