export interface ICategoryInput {
    name: string
    color: string
    extraLinkDescription?: string
    extraLinkUrl?: string
}

export type TCategory = ICategoryInput & {
    id: string
    videos: TVideo[]
}

export interface IVideoInput {
    categoryId: string
    title: string
    url: string
    description?: string
}

export type TVideo = IVideoInput & {
    id: string
}
