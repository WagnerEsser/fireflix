import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

const Video = () => {
    const [categories, setCategories] = useState<TCategory[]>([])
    const categoryTitles = categories.map(({ name }) => name)

    const { handleChange, values } = useForm({
        title: 'Vídeo padrão',
        url: 'https://www.youtube.com/watch?v=NhUr8cwDiiM',
        categoryId: 'Front End'
    })

    useEffect(() => {
        CategoryRepository.getCategories().then(categoriesFromServer => {
            setCategories(categoriesFromServer)
        })
    }, [])

    const handleSubmit = () => (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const categorySelected = categories.find(
            category => category.name === values.category
        )

        const movieInput: IMovieInput = {
            title: values.title,
            url: values.url,
            categoryId: categorySelected?.id || ''
        }

        MovieRepository.create(movieInput)
            .then(() => {
                console.log('Vídeo cadastrado com sucesso!')
            })
            .catch(err => {
                console.log(err)
                alert('Erro!')
            })
    }

    return (
        <PageDefault>
            <VideoWrapper>
                <h1>Cadastro de vídeo</h1>

                <form onSubmit={handleSubmit}>
                    <FormField
                        label='Título do vídeo'
                        name='title'
                        value={values.title}
                        onChange={handleChange}
                    />
                    <FormField
                        label='URL'
                        name='url'
                        value={values.url}
                        onChange={handleChange}
                    />
                    <FormField
                        label='Categoria'
                        name='categoryId'
                        value={values.categoryId}
                        onChange={handleChange}
                    />
                    <FormField
                        label='Categoria'
                        name='category'
                        value={values.category}
                        onChange={handleChange}
                        suggestions={categoryTitles}
                    />

                    <Button type='submit'>Cadastrar</Button>
                </form>

                <br />
                <br />

                <Link to='/registrations/create/category'>
                    Cadastrar categoria
                </Link>
            </VideoWrapper>
        </PageDefault>
    )
}

export default Video
