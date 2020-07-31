import React from 'react'
import Logo from '../../assets/images/Logo.png'
import Button from '../Button'
import './Menu.css'
import { MenuWrapper, LogoImage } from './style'

function Menu () {
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage className="Logo" alt="Fireflix" src={Logo} />
            </a>
            <Button as="a" className="ButtonLink" href="#">
                Novo vídeo
            </Button>
        </MenuWrapper>
    )
}

export default Menu
