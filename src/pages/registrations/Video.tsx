import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import FormField from '../../components/form-field/FormField'
import useForm from '../../hooks/useForm'
import Button from '../../components/Button'
import VideoRepository from '../../repositories/Video'
import CategoryRepository from '../../repositories/Category'
import { IVideoInput, TCategory } from '../../interfaces'
import { Form, PageWrapper } from './styles'

const INITITAL_STATE: IVideoInput = {
    title: '',
    url: '',
    categoryId: ''
}

const validFields = (values: IVideoInput) => {
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
        (field: string) => (value: React.FormEvent<HTMLInputElement>) => {
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

        console.log({ selected: values.category })
        const categorySelected = categories.find(
            category => category.name === values.categoryId
        )

        const videoInput: IVideoInput = {
            ...values,
            categoryId: categorySelected?.id || ''
        }

        VideoRepository.create(videoInput)
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
            <PageWrapper>
                <h1>Cadastro de vídeo</h1>
                <Form onSubmit={handleSubmit}>
                    {renderFields}
                    <Button type='submit'>Cadastrar</Button>
                </Form>
                <Link to='/registrations/create/category'>
                    Cadastrar categoria
                </Link>
            </PageWrapper>
        </PageDefault>
    )
}

export default Video
