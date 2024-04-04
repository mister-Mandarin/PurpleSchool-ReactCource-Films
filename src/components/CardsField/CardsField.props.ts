export interface CardsFieldProps {
    results: FilmData[];
}

export interface FilmData {
    id: string
    primaryImage: PrimaryImage
    titleType: TitleType
    titleText: TitleText
    originalTitleText: OriginalTitleText
    releaseDate: ReleaseDate
    position?: number
}

export interface PrimaryImage {
    id: string
    width: number
    height: number
    url: string
    caption: Caption
    __typename: string
}

export interface Caption {
    plainText: string
    __typename: string
}

export interface TitleType {
    text: string
    id: string
    isSeries: boolean
    isEpisode: boolean
    __typename: string
}

export interface TitleText {
    text: string
}

export interface OriginalTitleText {
    text: string
    __typename: string
}

export interface ReleaseDate {
    day: number
    month: number
    year: number
    __typename: string
}