/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

const useForm = (initialValues: any) => {
    const [values, setValues] = useState(initialValues)

    const setValue = (key: any, value: any) => {
        console.log({ key })
        console.log({ value })
        setValues({ ...values, [key]: value })
    }

    const handleChange = (infosDoEvento: React.FormEvent<HTMLInputElement>) => {
        setValue(
            infosDoEvento.currentTarget.getAttribute('name'),
            infosDoEvento.currentTarget.value
        )
    }

    const clearForm = () => {
        setValues(initialValues)
    }

    return { values, handleChange, clearForm }
}

export default useForm
