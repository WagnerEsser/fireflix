import React from 'react'
import { DefaultLink } from 'src/styles'
import { FooterBase } from './styles'

const Footer = () => (
    <FooterBase>
        <a href='https://www.alura.com.br/'>
            <img
                src='https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg'
                alt='Logo Alura'
            />
        </a>
        <p>
            Orgulhosamente criado durante a{' '}
            <DefaultLink href='https://www.alura.com.br/'>
                <strong>Imersão React da Alura</strong>
            </DefaultLink>
        </p>
        <p>Implementado por Wagner Esser</p>
    </FooterBase>
)

export default Footer
