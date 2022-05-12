import { render, screen } from '@testing-library/react';
import { MovieCardList } from './MovieCardList';

describe('<MovieCardList />', () => {
  describe('render list', () => {
    it('render items of list', async () => {
      let result = {
        search: [{
          title: "My God! Father",
          year: "2020",
          imdbID: "tt13476378",
          type: "movie",
          poster: "https://m.media-amazon.com/images/M/MV5BMjYzOTQ4NzItYTliMS00Nzc1LWEzNTctMDY5MGU5YWMxNmYxXkEyXkFqcGdeQXVyMTEzNDczNjY3._V1_SX300.jpg"
        }],
        totalResults: 1,
        response: true
      };

      render(<MovieCardList result={result} query="Father" />);

      expect(screen.getByTestId('titleText')).toHaveTextContent(result.search[0].title);
      expect(screen.getByTestId('typeText')).toHaveTextContent(result.search[0].type);
      expect(screen.getByTestId('yearText')).toHaveTextContent(result.search[0].year);
      expect(screen.getByTestId('currentQueryText')).toHaveTextContent("Father");

      expect((screen.getByTestId('posterImage') as HTMLImageElement).src).toEqual(result.search[0].poster);
    });
    it('render empty list', async () => {
      let result = {
        response: false,
        error: 'Movie not found!'
      }
      render(<MovieCardList result={result} query="asdfasdf" />);

      expect(screen.getByTestId('errorText')).toHaveTextContent(result.error);
    });
  });
});