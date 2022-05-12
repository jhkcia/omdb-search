import axios, { AxiosInstance } from "axios";
import humps from "humps";
import { IMovieSearchResult } from "../MovieCard/IMovieSearchResult";

class MovieApi {
    private static instance: MovieApi;
    private axiosInstance: AxiosInstance;
    private constructor(
    ) {
        this.axiosInstance = axios.create({ baseURL: "https://www.omdbapi.com/" });
        this.initializeInterceptor();
    }
    private initializeInterceptor() {
        this.axiosInstance.interceptors.response.use(
            response => {
                const { data } = response;
                const convertedData = humps.camelizeKeys(data);
                return { ...response, data: convertedData };
            },
            error => {
                return Promise.reject(error);
            }
        );
    }

    public static getInstance(): MovieApi {
        if (!MovieApi.instance) {
            MovieApi.instance = new MovieApi();
        }

        return MovieApi.instance;
    }

    public search(query: string, page: number = 1) {
        return this.axiosInstance.get<IMovieSearchResult>(`?s="${query}"&apikey=79efe649&page=${page}`)
    }
};

export default MovieApi;