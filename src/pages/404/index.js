import React from 'react'
import { NotFoundWrapper } from './style'
import PageDefault from '../../components/PageDefault'

const PageNotFound = () => {
    return (
        <PageDefault>
            <NotFoundWrapper>
                Página não encontrada!
            </NotFoundWrapper>
        </PageDefault>
    )
}

export default PageNotFound