interface FilmData {
    id: number;
    rate: number;
    img: string;
    title: string;
    isFavorite: boolean;
}

export interface CardsFieldProps {
    data: FilmData[];
}