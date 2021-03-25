import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import FormField from '../../components/form-field/FormField'
import Button from '../../components/Button'
import useForm from '../../hooks/useForm'
import CategoryRepository from '../../repositories/Category'
import styled from 'styled-components'
import { ICategoryInput, TCategory } from '../../interfaces'
import Loading from 'src/components/Loading'

const CategoryWrapper = styled.div`
    padding: 50px;
    display: flex;
`
const CreateCategory = styled.div`
    flex: 1;
`
const CategoryList = styled.div`
    flex: 1;
`
const emptyState: ICategoryInput = {
    name: '',
    color: '#FFFFFF'
}

const Form = styled.form`
    margin-bottom: 20px;
`

const fields = [
    { label: 'Nome da categoria', name: 'name' },
    { label: 'Cor', name: 'color', type: 'color' }
]

const validFields = (values: ICategoryInput) => {
    const errors = []
    if (!values.name.length) {
        errors.push('name')
    }

    return errors
}

const Category = () => {
    const [categories, setCategories] = useState<TCategory[]>([])
    const [errors, setErrors] = useState<string[]>([])
    const { handleChange: onChange, values, clearForm } = useForm(emptyState)

    useEffect(() => {
        CategoryRepository.getCategories()
            .then(categories => setCategories([...categories]))
            .catch(err => alert(err))
    }, [])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.stopPropagation()
        event.preventDefault()
        const newErrors = validFields(values)

        if (newErrors.length) {
            setErrors(newErrors)
            return
        }

        const categoryInput: ICategoryInput = { ...values }

        CategoryRepository.create(categoryInput)
            .then(() => {
                alert('Categoria cadastrada com sucesso!')
                setCategories([...categories, values])
                clearForm()
            })
            .catch(err => {
                console.log(err)
                alert('Erro!')
            })
    }

    const handleChange = useCallback(
        (field: string) => (value?: string) => {
            onChange(value)
            setErrors(errors => errors.filter(item => item !== field))
        },
        [onChange]
    )

    const renderFields = useMemo(
        () =>
            fields.map(field => (
                <FormField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    value={values[field.name]}
                    error={!!errors.find(item => item === field.name)}
                    onChange={handleChange(field.name)}
                />
            )),
        [values, errors, handleChange]
    )

    return (
        <PageDefault>
            <CategoryWrapper>
                <CreateCategory>
                    <h1>Nova categoria</h1>
                    <Form onSubmit={handleSubmit}>
                        {renderFields}
                        <Button type='submit'>Cadastrar</Button>
                    </Form>
                    <Link to='/registrations/create/movie'>
                        Cadastrar vídeo
                    </Link>
                </CreateCategory>
                <CategoryList>
                    <h1>Categorias</h1>
                    {categories.length === 0 && <Loading width={300} />}
                    <ul>
                        {categories.map(category => (
                            <li key={category.name}>{category.name}</li>
                        ))}
                    </ul>
                </CategoryList>
            </CategoryWrapper>
        </PageDefault>
    )
}

export default Category
