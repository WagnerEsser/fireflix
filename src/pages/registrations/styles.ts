import styled from 'styled-components'

export const CategoryList = styled.ul`
    list-style: none;
    padding-left: 0%;

    & > li {
        margin-bottom: 10px;
        display: flex;
    }
`

interface ICircleProps {
    color: string
}

export const Circle = styled.div<ICircleProps>`
    background-color: ${({ color }) => color};
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin-right: 10px;
`

export const Form = styled.form`
    margin-bottom: 20px;
`
