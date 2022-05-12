import { useEffect, useState } from "react";
import MovieApi from "./api/MovieApi";
import { IMovie } from "./MovieCard/IMovie";
import { MovieList } from "./MovieList/MovieList";
import { MovieListFooter } from "./MovieList/MovieListFooter";
import { MovieListHeader } from "./MovieList/MovieListHeader";
import { SearchArea } from "./SearchArea/SearchArea";

function App() {
  const pageSize = 10;
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [currentQuery, setCurrentQuery] = useState<string>("");
  const [apiError, setApiError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);


  const handleSearchQuery = (query: string) => {
    setCurrentQuery(query);
    setCurrentPage(1);
  }
  useEffect(() => {
    MovieApi.getInstance().search(currentQuery, currentPage).then((response) => {
      if (response.data.search) {
        setMovies(response.data.search)
      } else {
        setMovies([]);
      }
      if (response.data.totalResults) {
        setTotalResults(response.data.totalResults);
      }

      if (response.data.totalResults && response.data.search) {
        setHasMore(pageSize * (currentPage - 1) + response.data.search.length < response.data.totalResults);
      } else {
        setHasMore(false);
      }

      setApiError(response.data.error ?? '');

    })

  }, [currentPage, currentQuery])


  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);

  }

  return <>
    <SearchArea handleSearchQuery={handleSearchQuery} />
    <MovieListHeader query={currentQuery} pageNumber={currentPage} totalResults={totalResults} error={apiError} />
    <MovieList items={movies} />
    <MovieListFooter hasMore={hasMore} handleLoadMore={handleLoadMore} />
  </>;
}

export default App;
