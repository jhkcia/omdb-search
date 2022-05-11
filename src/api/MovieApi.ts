import axios from "axios";
import { IMovieSearchResult } from "../MovieCard/IMovieSearchResult";

class MovieApi {
    private static instance: MovieApi;

    private constructor() { }

    public static getInstance(): MovieApi {
        if (!MovieApi.instance) {
            MovieApi.instance = new MovieApi();
        }

        return MovieApi.instance;
    }

    public search(query: string, page: number = 1) {
        //TODO read apiKey from config file.
        return axios.get<IMovieSearchResult>(`http://www.omdbapi.com/?s="${query}"&apikey=79efe649&page=${page}`)
    }
};

export default MovieApi;