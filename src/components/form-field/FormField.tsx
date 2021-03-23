import React from 'react'
import { FormFieldWrapper, Label, Input, Text } from './styles'

interface IProps {
    label: string
    name: string
    value?: string
    type?: string
    suggestions?: string[]
    error?: boolean
    onChange(values: unknown): void
}

const FormField = (props: IProps) => {
    const { label, type, name, value, onChange, suggestions = [] } = props
    const fieldId = `id_${name}`
    const hasValue = !!value
    const hasSuggestions = Boolean(suggestions.length)

    return (
        <FormFieldWrapper>
            <Label htmlFor={fieldId}>
                <Input
                    id={fieldId}
                    type={type}
                    value={value}
                    name={name}
                    hasValue={hasValue}
                    autoComplete={hasSuggestions ? 'off' : 'on'}
                    list={
                        hasSuggestions ? `suggestionFor_${fieldId}` : undefined
                    }
                    error={props.error}
                    onChange={onChange}
                />
                <Text>{label}</Text>
                {hasSuggestions && (
                    <datalist id={`suggestionFor_${fieldId}`}>
                        {suggestions.map(suggestion => (
                            <option
                                value={suggestion}
                                key={`suggestionFor_${fieldId}_option${suggestion}`}>
                                {suggestion}
                            </option>
                        ))}
                    </datalist>
                )}
            </Label>
        </FormFieldWrapper>
    )
}

export default FormField
