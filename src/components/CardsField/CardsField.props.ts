export interface FilmData {
    id: number;
    rate?: number;
    img: string;
    title?: string;
    isFavorite: boolean;
}

export interface CardsFieldProps {
    data: FilmData[];
}

//исключаем уже существующие свойства из интерфейса
export interface FilmDataFull extends Omit<FilmData, keyof FilmData> {
    [key: string]: string;
}
