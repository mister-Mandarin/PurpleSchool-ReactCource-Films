export interface FilmData {
    '#IMDB_ID': number;
    '#RANK'?: number;
    '#IMG_POSTER': string;
    '#TITLE'?: string;
}

export interface CardsFieldProps {
    ok: boolean;
    description: FilmData[];
    error_code: number;
}

export interface FilmDataAll extends FilmDataShort {
    short: FilmDataShort;
}

export interface FilmDataShort {
    name: string;
    image: string;
    description: string;
    aggregateRating: AggregateRating;
    isFavorite: boolean;
    '@type': string;
    datePublished: string;
    duration: string;
    genre: string[];
    review: Review;
}

export interface AggregateRating {
    '@type': string;
    ratingCount: number;
    bestRating: number;
    worstRating: number;
    ratingValue: number;
}

export interface Review {
    '@type': string;
    dateCreated: string;
    inLanguage: string;
    name: string;
    reviewBody: string;
}
