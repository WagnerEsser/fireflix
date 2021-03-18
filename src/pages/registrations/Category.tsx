import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import FormField from '../../components/form-field/FormField'
import Button from '../../components/Button'
import useForm from '../../hooks/useForm'
import CategoryRepository from '../../repositories/Category'
import styled from 'styled-components'
import { ICategoryInput, TCategory } from '../../interfaces'

const CategoryWrapper = styled.div`
    padding: 50px;
`

const emptyState: ICategoryInput = {
    name: '',
    description: '',
    color: '#FFFFFF'
}

const Category = () => {
    const [categories, setCategories] = useState<TCategory[]>([])
    const { handleChange, values, clearForm } = useForm(emptyState)

    useEffect(() => {
        CategoryRepository.getCategories()
            .then(categories => setCategories([...categories]))
            .catch(err => alert(err))
    }, [])

    function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault()
        const categoryInput: ICategoryInput = {
            name: values.name,
            description: values.description,
            color: values.color
        }
        CategoryRepository.create(categoryInput).then(() => {
            setCategories([...categories, values])
            clearForm()
        })
    }

    return (
        <PageDefault>
            <CategoryWrapper>
                <h1>Cadastro de categoria</h1>

                <form onSubmit={handleSubmit}>
                    <FormField
                        label='Nome da categoria:'
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={handleChange}
                    />

                    <FormField
                        label='Descrição'
                        name='description'
                        type='textarea'
                        value={values.description}
                        onChange={handleChange}
                    />

                    <FormField
                        label='Cor:'
                        name='color'
                        type='color'
                        value={values.color}
                        onChange={handleChange}
                    />
                    <Button onClick={handleSubmit}>Cadastrar</Button>
                </form>

                {categories.length === 0 && <p>Loading...</p>}

                <ul>
                    {categories.map(category => (
                        <li key={category.name}>{category.name}</li>
                    ))}
                </ul>

                <Link to='/'>Página inicial</Link>
            </CategoryWrapper>
        </PageDefault>
    )
}

export default Category
