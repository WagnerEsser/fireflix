import config from '../config'
import { IVideoInput } from '../interfaces'

const URL_MOVIES = `${config.URL_BACKEND}/videos`

export const create = async (videoInput: IVideoInput) => {
    const responseFromServer = await fetch(`${URL_MOVIES}?_embed=videos`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(videoInput)
    })
    if (responseFromServer.ok) {
        const response = await responseFromServer.json()
        return response
    }
    throw new Error('Não foi possível cadastrar os dados :(')
}

export default { create }
