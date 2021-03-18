import React from 'react'
import Logo from '../../assets/images/Logo.png'
import './menu.css'
import { Link } from 'react-router-dom'
import { LogoImage, MenuWrapper } from './styles'
import Button from '../Button'

const Menu = () =>
    <MenuWrapper className="Menu">
        <Link to="/">
            <LogoImage className="Logo" alt="Fireflix" src={Logo} />
        </Link>
        <Button as={Link} className="ButtonLink" to="/registrations/create/video">
            Novo vídeo
        </Button>
    </MenuWrapper>

export default Menu
