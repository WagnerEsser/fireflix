import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import styled from 'styled-components'
import FormField from '../../components/form-field/FormField'
import useForm from '../../hooks/useForm'
import Button from '../../components/Button'
import MovieRepository from '../../repositories/Movie'
import CategoryRepository from '../../repositories/Category'
import { IMovieInput, TCategory } from '../../interfaces'

const VideoWrapper = styled.div`
    padding: 50px;
`

const INITITAL_STATE: IMovieInput = {
    title: '',
    url: '',
    categoryId: ''
}

const Form = styled.form`
    margin-bottom: 20px;
`

const validFields = (values: IMovieInput) => {
    const errors = []
    if (!values.url.length) {
        errors.push('url')
    }
    if (!values.title.length) {
        errors.push('title')
    }
    if (!values.categoryId.length) {
        errors.push('categoryId')
    }

    return errors
}

const Video = () => {
    const [categories, setCategories] = useState<TCategory[]>([])
    const { handleChange: onChange, values } = useForm(INITITAL_STATE)
    const [errors, setErrors] = useState<string[]>([])
    const categoryTitles = categories.map(({ name }) => name)
    const history = useHistory()

    useEffect(() => {
        CategoryRepository.getCategories().then(categoriesFromServer => {
            setCategories(categoriesFromServer)
        })
    }, [])

    const handleChange = useCallback(
        (field: string) => (value?: string) => {
            console.log(value)
            onChange(value)
            setErrors(errors => errors.filter(item => item !== field))
        },
        [onChange]
    )

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.stopPropagation()
        event.preventDefault()
        const newErrors = validFields(values)

        if (newErrors.length) {
            setErrors(newErrors)
            return
        }

        const categorySelected = categories.find(
            category => category.name === values.category
        )

        const movieInput: IMovieInput = {
            ...values,
            categoryId: categorySelected?.id || ''
        }

        MovieRepository.create(movieInput)
            .then(() => {
                alert('Vídeo cadastrado com sucesso!')
                history.push('/')
            })
            .catch(err => {
                console.log(err)
                alert('Erro!')
            })
    }

    const fields = useMemo(
        () => [
            { label: 'Título do vídeo', name: 'title' },
            { label: 'Descrição', name: 'description' },
            { label: 'URL', name: 'url' },
            {
                label: 'Categoria',
                name: 'categoryId',
                suggestions: categoryTitles
            }
        ],
        [categoryTitles]
    )

    const renderFields = useMemo(
        () =>
            fields.map(field => (
                <FormField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    value={values[field.name]}
                    suggestions={field.suggestions}
                    error={!!errors.find(item => item === field.name)}
                    onChange={handleChange(field.name)}
                />
            )),
        [fields, values, errors, handleChange]
    )

    return (
        <PageDefault>
            <VideoWrapper>
                <h1>Cadastro de vídeo</h1>
                <Form onSubmit={handleSubmit}>
                    {renderFields}
                    <Button type='submit'>Cadastrar</Button>
                </Form>
                <Link to='/registrations/create/category'>
                    Cadastrar categoria
                </Link>
            </VideoWrapper>
        </PageDefault>
    )
}

export default Video
