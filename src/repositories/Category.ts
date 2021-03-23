import config from '../config'
import { ICategoryInput, TCategory } from '../interfaces'

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`

export const getCategories = async (): Promise<TCategory[]> => {
    const response = await fetch(URL_CATEGORIES)

    if (response.ok) {
        return response.json()
    }
    throw new Error('Não foi possível buscar os dados :(')
}

export const getAllItems = async (): Promise<TCategory[]> => {
    const response = await fetch(URL_CATEGORIES + '?_embed=movies')

    if (response.ok) {
        return response.json()
    }
    throw new Error('Não foi possível buscar os dados :(')
}

export const create = async (categoryInput: ICategoryInput) => {
    const response = await fetch(config.URL_BACKEND + '/categories', {
        method: 'POST',
        headers: { 'Content-type': 'applications/json' },
        body: JSON.stringify(categoryInput)
    })

    return await response.json()
}

export default { getCategories, getAllItems, create }
