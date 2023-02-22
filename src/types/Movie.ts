export interface iMovie {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    backdrop_path: string;
    poster_path: string;
    genre_ids: Array<number>;
    release_date: string;
}