import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='sobremi'>Sobre mi <i class="fa fa-microphone-slash" aria-hidden="true"></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='formacion'>Formación</a>
                    </li>
                    <li className='nav-item'>
                        <a href='proyectos'>Proyectos</a>
                    </li>
                    <li className='nav-item'>
                        <a href='cursos'>Cursos</a>
                    </li>
                    <li className='nav-item'>
                        <a href='contacto'>Contacto</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2022 Alejandro Ruiz Aranda All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
