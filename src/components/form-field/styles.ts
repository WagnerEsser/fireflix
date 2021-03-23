import styled, { css } from 'styled-components'

export const FormFieldWrapper = styled.div`
    position: relative;
    max-width: 500px;
    textarea {
        min-height: 150px;
    }
    input[type='color'] {
        padding-left: 56px;
    }
`

export const Label = styled.label``

export const Text = styled.span`
    color: #e5e5e5;
    height: 57px;
    position: absolute;
    top: 0;
    left: 16px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: 0.1s ease-in-out;
`

interface IInputProps {
    hasValue: boolean
    error?: boolean | undefined
}

export const Input = styled.input<IInputProps>`
    background: #53585d;
    color: #f5f5f5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border: ${({ error }) => (error ? '1px solid red' : 0)};

    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color 0.3s;

    &:focus {
        border-bottom-color: var(--primary);
    }

    &:focus:not([type='color']) + span {
        transform: scale(0.6) translateY(-10px);
    }

    ${({ hasValue }) =>
        hasValue &&
        css`
            &:not([type='color']) + span {
                transform: scale(0.6) translateY(-10px);
            }
        `}
`
