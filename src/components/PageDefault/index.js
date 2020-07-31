import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import { Main } from './style'

const PageDefault = ({ children }) =>
    <>
        <Menu />
        <Main>
            { children }
        </Main>
        <Footer />
    </>

export default PageDefault