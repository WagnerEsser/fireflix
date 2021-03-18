import React from 'react'
import PageDefault from '../components/PageDefault'
import styled from 'styled-components'

export const NotFoundWrapper = styled.div`
    padding: 50px;
`

const PageNotFound = () => (
    <PageDefault>
        <NotFoundWrapper>Página não encontrada!</NotFoundWrapper>
    </PageDefault>
)

export default PageNotFound
