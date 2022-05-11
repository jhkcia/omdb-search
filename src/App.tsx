import { useState } from "react";
import MovieApi from "./api/MovieApi";
import { IMovieSearchResult } from "./MovieCard/IMovieSearchResult";
import { MovieCardList } from "./MovieCard/MovieCardList";
import { SearchArea } from "./SearchArea/SearchArea";

const sample = {
  search: [{
    title: "My God! Father",
    year: "2020",
    imdbID: "tt13476378",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMjYzOTQ4NzItYTliMS00Nzc1LWEzNTctMDY5MGU5YWMxNmYxXkEyXkFqcGdeQXVyMTEzNDczNjY3._V1_SX300.jpg"
  },
  {
    title: "My God! Father",
    year: "2020",
    imdbID: "tt13476378",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMjYzOTQ4NzItYTliMS00Nzc1LWEzNTctMDY5MGU5YWMxNmYxXkEyXkFqcGdeQXVyMTEzNDczNjY3._V1_SX300.jpg"
  },
  {
    title: "My God! Father",
    year: "2020",
    imdbID: "tt13476378",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMjYzOTQ4NzItYTliMS00Nzc1LWEzNTctMDY5MGU5YWMxNmYxXkEyXkFqcGdeQXVyMTEzNDczNjY3._V1_SX300.jpg"
  },
  {
    title: "My God! Father",
    year: "2020",
    imdbID: "tt13476378",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMjYzOTQ4NzItYTliMS00Nzc1LWEzNTctMDY5MGU5YWMxNmYxXkEyXkFqcGdeQXVyMTEzNDczNjY3._V1_SX300.jpg"
  }], totalResults: 10,
  response: true

};

function App() {
  const handleSearchQuery = (query: string) => {
    MovieApi.getInstance().search(query, 1).then((response) => {
      setSearchResult(response.data);
    })
  }

  const [searchResult, setSearchResult] = useState<IMovieSearchResult>(sample);

  return <>
    <SearchArea handleSearchQuery={handleSearchQuery} />
    <MovieCardList result={searchResult} />
  </>;
}

export default App;
