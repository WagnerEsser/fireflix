import React from 'react'
import Logo from '../../assets/images/Logo.png'
import Button from '../Button'
import './Menu.css'
import { MenuWrapper, LogoImage } from './style'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage className="Logo" alt="Fireflix" src={Logo} />
            </Link>
            <Button as={Link} className="ButtonLink" to="/registrations/create/video">
                Novo vídeo
            </Button>
        </MenuWrapper>
    )
}

export default Menu
