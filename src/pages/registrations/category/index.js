import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryWrapper } from './style.js'
import PageDefault from '../../../components/PageDefault/index.js'

const Video = () =>
    <PageDefault>
        <CategoryWrapper>
            <h1>Cadastro de categoria</h1>
            
            <Link to='/'>
                Página inicial
            </Link>
        </CategoryWrapper>
    </PageDefault>

export default Video