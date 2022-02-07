import React, { useState } from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import resume from '../img/resume.jpg';

function Navigation() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    return (
        <NavigationStyled>
            <ul className="nav-items">
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
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }
`;
export default Navigation;