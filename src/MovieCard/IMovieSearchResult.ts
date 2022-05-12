import { IMovie } from "./IMovie";

export interface IMovieSearchResult {
    response: boolean;
    error?: string;
    search?: IMovie[];
    totalResults?: number;
}
