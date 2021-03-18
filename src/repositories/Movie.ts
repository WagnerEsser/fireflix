import config from '../Config'
import { IMovieInput } from '../interfaces'

const URL_MOVIES = `${config.URL_BACKEND}/movies`

export const create = async (movieInput: IMovieInput) => {
    const responseFromServer = await fetch(`${URL_MOVIES}?_embed=movies`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(movieInput),
    })
    if (responseFromServer.ok) {
        const response = await responseFromServer.json()
        return response
    }
    throw new Error('Não foi possível cadastrar os dados :(')
}

export default { create }