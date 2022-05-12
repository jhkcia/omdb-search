import { IMovie } from "../MovieCard/IMovie";

export interface IMovieSearchResult {
    response: boolean;
    error?: string;
    search?: IMovie[];
    totalResults?: number;
}
