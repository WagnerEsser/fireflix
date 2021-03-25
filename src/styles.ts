import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
`

export const PageWrapper = styled.div`
    padding: 50px;
`

export const PageDivisor = styled.div`
    flex: 1;
`

const linkCss = `
    text-decoration: none;
    transition: opacity 0.3s;
    &:hover,
    &:focus {
        opacity: 0.5;
    }
`
export const DefaultLink = styled.a`
    ${linkCss}
`

export const CustomLink = styled(Link)`
    ${linkCss}
`
