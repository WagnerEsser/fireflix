import { useState } from 'react'

const useForm = (initialValues: any) => {
    const [values, setValues] = useState(initialValues)

    const setValue = (key: any, value: any) => {
        setValues({ ...values, [key]: value })
    }

    const handleChange = (infosDoEvento: any) => {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        )
    }

    const clearForm = () => {
        setValues(initialValues)
    }

    return { values, handleChange, clearForm }
}

export default useForm
