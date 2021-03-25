import React, { useEffect, useState } from 'react'
import BannerMain from '../components/banner-main/BannerMain'
import Carousel from '../components/carousel/Carousel'
import CategoryRepository from '../repositories/Category'
import PageDefault from '../components/PageDefault'
import { TCategory, TVideo } from '../interfaces'
import Loading from '../components/Loading'

const renderFirstVideo = (video: TVideo) => (
    <BannerMain
        key={video.title}
        title={video.title}
        url={video.url}
        description={video.description}
    />
)

const renderCategory = (category: TCategory, index: number) => {
    const [firstVideo] = category.videos
    const firstCategory = index === 0

    return (
        <div key={category.id}>
            {firstCategory && renderFirstVideo(firstVideo)}
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
