import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CategoryWrapper } from './style.js'
import PageDefault from '../../../components/PageDefault/index.js'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm'

interface ICategory {
    name: string
    description: string
    color: string
}

const emptyState: ICategory = {
    name: '',
    description: '',
    color: '#FFFFFF'
}

const Category = () => {
    const [categories, setCategories] = useState<ICategory[]>([])
    const { handleChange, values, clearForm } = useForm(emptyState)

    useEffect(() => {
        const URL = 'http://localhost:8080/categories'
        fetch(URL)
            .then(async response => {
                const categories = await response.json()
                setCategories([...categories])
            })
    }, [])

    function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault()
        setCategories([ ...categories, values ])
        clearForm()
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
                    <Button onClick={handleSubmit}>
                        Cadastrar
                    </Button>
                </form>

                {categories.length === 0 && (
                    <p>Loading...</p>
                )}

                <ul>
                    {categories.map(category =>
                        <li key={category.name}>
                            {category.name}
                        </li>
                    )}
                </ul>

                <Link to='/'>
                    Página inicial
                </Link>
            </CategoryWrapper>
        </PageDefault >
    )
}

export default Category
