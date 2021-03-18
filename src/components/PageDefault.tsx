import React from 'react'
import Menu from './menu/Menu'
import Footer from './footer/Footer'
import styled from 'styled-components'

export const Main = styled.div`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: 50px 5% auto 5%5%;
`

const PageDefault = ({ children }: any) =>
    <>
        <Menu />
        <Main>
            {children}
        </Main>
        <Footer />
    </>

export default PageDefault