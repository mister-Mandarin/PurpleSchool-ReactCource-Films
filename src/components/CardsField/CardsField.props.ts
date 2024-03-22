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

//исключаем уже существующие свойства из интерфейса
export interface FilmDataFull extends Omit<FilmData, keyof FilmData> {
    [key: string]: string;
}
