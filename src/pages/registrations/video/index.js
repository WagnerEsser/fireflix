import React from 'react'
import { Link } from 'react-router-dom'
import { VideoWrapper } from './style.js'
import PageDefault from '../../../components/PageDefault/index.js'

const Video = () =>
    <PageDefault>
        <VideoWrapper>
            <h1>Cadastro de vídeo</h1>
            
            <Link to='/registrations/create/category'>
                Cadastrar categoria
            </Link>
        </VideoWrapper>
    </PageDefault>

export default Video