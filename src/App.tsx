import { useEffect, useMemo, useState } from "react";
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


  const handleSearchQuery = (query: string) => {
    setCurrentQuery(query);
    setCurrentPage(1);
  }
  useEffect(() => {
    if (currentQuery && currentQuery !== "") {
      MovieApi.getInstance().search(currentQuery, currentPage).then((response) => {
        setMovies(response.data.search ?? []);
        setTotalResults(response.data.totalResults ?? 0);
        setApiError(response.data.error ?? '');
      });
    } else {
      setMovies([]);
    }

  }, [currentPage, currentQuery])

  const pageCount = useMemo(() => {
    return Math.ceil(totalResults / pageSize);
  }, [totalResults]);

  return <>
    <SearchArea handleSearchQuery={handleSearchQuery} />
    {currentQuery && <MovieListHeader query={currentQuery} pageNumber={currentPage} totalResults={totalResults} error={apiError} />}
    <MovieList items={movies} />
    {pageCount > 1 && <MovieListFooter page={currentPage} onChange={setCurrentPage} count={pageCount} />}
  </>;
}

export default App;
