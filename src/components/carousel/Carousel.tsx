import React from 'react'
import VideoCard from './VideoCard'
import Slider from './Slider'
import { Title, ExtraLink, SliderWrapper, SliderItem } from './styles'
import { TCategory } from 'src/interfaces'
import { CustomLink } from 'src/styles'

interface IProps {
    category: TCategory
    ignoreFirstVideo: boolean
}

const Carousel = (props: IProps) => {
    const { category, ignoreFirstVideo } = props
    const title = category.name
    const color = category.color
    const extraLinkUrl = category.extraLinkUrl
    const extraLinkDescription = category.extraLinkDescription
    const videos = category.videos

    return (
        <SliderWrapper>
            {title && (
                <>
                    <Title style={{ backgroundColor: color || 'red' }}>
                        {title}
                    </Title>
                    {extraLinkUrl && (
                        <ExtraLink href={extraLinkUrl} target='_blank'>
                            {extraLinkDescription}
                        </ExtraLink>
                    )}
                </>
            )}
            {category.videos.length === 0 && (
                <>
                    <h3>Não há filmes cadastrados nesta categoria ainda.</h3>
                    <CustomLink to='/registrations/create/video'>
                        {'> '} Cadastrar vídeo
                    </CustomLink>
                </>
            )}
            <Slider>
                {videos &&
                    videos.map((video, index) => {
                        if (ignoreFirstVideo && index === 0) {
                            return null
                        }

                        return (
                            <SliderItem key={video.title}>
                                <VideoCard
                                    videoTitle={video.title}
                                    videoURL={video.url}
                                    categoryColor={color}
                                />
                            </SliderItem>
                        )
                    })}
            </Slider>
        </SliderWrapper>
    )
}

export default Carousel
