import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../img/logo.svg';

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#sobremi' onClick={closeMenu}>Sobre mi</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#formacion' onClick={closeMenu}>Formación</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#cursos' onClick={closeMenu}>Cursos</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#proyectos' onClick={closeMenu}>Proyectos</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contacto' onClick={closeMenu}>Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
