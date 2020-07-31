import Button from "../Button"
import styled from "styled-components"

export const LogoImage = styled.img`
    max-width: 168px;

    @media (max-width: 800px) { /* até 800px */
        max-width: 105px;
    }
`
export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;

    position: fixed;
    top: 0;
    left: 0;
    padding-left: 5%;
    padding-right: 5%;
    
    display: flex;
    justify-content: space-between; /* espaço entre os componentes internos */
    align-items: center; /* sempre perpendicular ao sentido do 'flex',
                            neste caso alinhará verticalmente */
    
    background-color: var(--black);
    border-bottom: 2px solid var(--primary);

    @media (max-width: 800px) {
        height: 40px;
        justify-content: center;
    }
`
export const ButtonLink = styled(Button)`
    border: 1px solid var(--white);
    border-radius: 4px;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    padding: 16px 24px; /* top / bottom | left / right */
    text-decoration: none;
    transition: opacity .1s;

    &:hover, &:focus {
        opacity: 0.5;
    }

    @media (max-width: 800px) {
        color: var(--white);
        background-color: var(--primary);
        border: 0;
        border-radius: 0;
        bottom: 0;
        left: 0;
        outline: none;
        right: 0;
        position: fixed;
        text-align: center;
    }
`
