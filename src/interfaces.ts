export interface IExtraLink {
    description: string
    url: string
}

export interface ICategoryInput {
    name: string
    color: string
    extra_link?: IExtraLink
}

export type TCategory = ICategoryInput & {
    id: string
    movies: TMovie[]
}

export interface IMovieInput {
    categoryId: string
    title: string
    url: string
    description?: string
}

export type TMovie = IMovieInput & {
    id: string
}
