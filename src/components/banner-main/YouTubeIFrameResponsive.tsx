import React from 'react'
import { ResponsiveIframe, VideoContainer } from './styles'

interface IProps {
    youtubeId: string
}

const YouTubeIFrameResponsive = (props: IProps) => (
    <VideoContainer>
        <ResponsiveIframe
            title='Titulo do Iframe'
            src={`https://www.youtube.com/embed/${props.youtubeId}?autoplay=0&mute=1`}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
        />
    </VideoContainer>
)

export default YouTubeIFrameResponsive
