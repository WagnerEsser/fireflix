import React from 'react'
import VideoCard from './VideoCard'
import Slider from './Slider'
import { Title, ExtraLink, SliderWrapper, SliderItem } from './styles'
import { TCategory } from 'src/interfaces'

interface IProps {
    category: TCategory,
    ignoreFirstVideo: boolean
}

const Carousel = (props: IProps) => {
    const { category, ignoreFirstVideo } = props
    const categoryTitle = category.name
    const categoryColor = category.color
    const categoryExtraLink = category.extra_link
    const movies = category.movies

    return (
        <SliderWrapper>
            {categoryTitle && (
                <>
                    <Title style={{ backgroundColor: categoryColor || 'red' }}>
                        {categoryTitle}
                    </Title>
                    {categoryExtraLink && (
                        <ExtraLink href={categoryExtraLink.url} target="_blank">
                            {categoryExtraLink.description}
                        </ExtraLink>
                    )}
                </>
            )}
            <Slider>
                {movies && movies.map((movie, index) => {
                    if (ignoreFirstVideo && index === 0) {
                        return null
                    }

                    return (
                        <SliderItem key={movie.title}>
                            <VideoCard
                                videoTitle={movie.title}
                                videoURL={movie.url}
                                categoryColor={categoryColor}
                            />
                        </SliderItem>
                    )
                })}
            </Slider>
        </SliderWrapper>
    )
}

export default Carousel
