import React from 'react'
import styled from 'styled-components'
import LoadingGif from '../assets/images/Loading.gif'

export const LoadingBase = styled.div`
    width: max-content;
    margin: 50px auto auto auto;
`

interface IProps {
    width?: number
}

const Loading = (props: IProps) => (
    <LoadingBase>
        <img
            width={props.width}
            className='Loading'
            alt='Loading...'
            src={LoadingGif}
        />
    </LoadingBase>
)

export default Loading
