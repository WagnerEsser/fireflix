import React from 'react'
import VideoIframeResponsive from './YouTubeIFrameResponsive'
import {
    BannerMainContainer,
    ContentAreaContainer,
    WatchButton,
    Item,
    Title,
    Description
} from './styles'

const getYouTubeId = (youtubeURL: string) => {
    return youtubeURL.replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7'
    )
}

interface IProps {
    title: string
    url: string
    description?: string
}

const BannerMain = (props: IProps) => {
    const { url, description, title } = props
    const youTubeId = getYouTubeId(url)
    const bgUrl = `https://img.youtube.com/vi/${youTubeId}/maxresdefault.jpg`

    return (
        <BannerMainContainer backgroundImage={bgUrl}>
            <ContentAreaContainer>
                <Item>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Item>
                <Item>
                    <VideoIframeResponsive youtubeId={youTubeId} />
                    <WatchButton>Assistir</WatchButton>
                </Item>
            </ContentAreaContainer>
        </BannerMainContainer>
    )
}

export default BannerMain
