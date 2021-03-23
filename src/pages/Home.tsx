import React, { useEffect, useState } from 'react'
import BannerMain from '../components/banner-main/BannerMain'
import Carousel from '../components/carousel/Carousel'
import CategoryRepository from '../repositories/Category'
import PageDefault from '../components/PageDefault'
import { TCategory, TMovie } from '../interfaces'
import Loading from '../components/Loading'

const renderFirstMovie = (movie: TMovie) => (
    <BannerMain
        key={movie.title}
        title={movie.title}
        url={movie.url}
        description={movie.description}
    />
)

const renderCategory = (category: TCategory, index: number) => {
    const [firstMovie] = category.movies
    const firstCategory = index === 0

    return (
        <div key={category.id}>
            {firstCategory && renderFirstMovie(firstMovie)}
            {<Carousel ignoreFirstVideo={firstCategory} category={category} />}
        </div>
    )
}

const Home = () => {
    const [values, setValues] = useState<TCategory[]>([])

    useEffect(() => {
        CategoryRepository.getAllItems()
            .then(data => {
                setValues(data)
            })
            .catch(err => alert(err))
    }, [])

    return (
        <PageDefault>
            {values.length === 0 && <Loading width={300} />}
            {values.map(renderCategory)}
        </PageDefault>
    )
}

export default Home
