import React from 'react'
import Logo from '../../assets/images/Logo.png'
import { Button } from '../Button'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" alt="Fireflix" src={Logo} />
            </a>
            <Button as="a" className="ButtonLink" href="#">
                Novo vídeos
            </Button>
        </nav>
    )
}

export default Menu