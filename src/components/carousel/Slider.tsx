import React from 'react'
import SlickSlider from 'react-slick'
import { Container } from './styles'

interface IProps {
    children: React.ReactNode
}

const Slider = ({ children }: IProps) => (
    <Container>
        <SlickSlider
            {...{
                dots: false,
                infinite: false,
                speed: 300,
                centerMode: false,
                variableWidth: true,
                adaptiveHeight: true
            }}>
            {children}
        </SlickSlider>
    </Container>
)

export default Slider
