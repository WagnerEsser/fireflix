import React from 'react'
import styled from 'styled-components'

interface IProps {
    name?: string
    label?: string
    type?: string
    value?: string | number | readonly string[]
    onChange?: ((
        (event: React.ChangeEvent<HTMLTextAreaElement>) => void) & (
        (event: React.ChangeEvent<HTMLInputElement>) => void
    ))
}

const FormWrapper = styled.div``
const Label = styled.label``
const Text = styled.span``

const FormField = ({ label, name, type, value, onChange }: IProps) => {
    const fieldId = `id_${name}`
    const Input = type === 'textarea' ? 'textarea' : 'input'

    return (
        <FormWrapper>
            <Label htmlFor={fieldId}>
                <Text>{label}:</Text>
                <Input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            </Label>
        </FormWrapper>
    )
}

export default FormField