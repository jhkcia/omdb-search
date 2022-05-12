import { render, screen } from '@testing-library/react';
import { MovieList } from './MovieList';

describe('<MovieList />', () => {
  describe('render list', () => {
    it('render items of list', async () => {
      let items = [{
        title: "My God! Father",
        year: "2020",
        imdbID: "tt13476378",
        type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BMjYzOTQ4NzItYTliMS00Nzc1LWEzNTctMDY5MGU5YWMxNmYxXkEyXkFqcGdeQXVyMTEzNDczNjY3._V1_SX300.jpg"
      }];

      render(<MovieList items={items} />);

      expect(screen.getByTestId('titleText')).toHaveTextContent(items[0].title);
      expect(screen.getByTestId('typeText')).toHaveTextContent(items[0].type);
      expect(screen.getByTestId('yearText')).toHaveTextContent(items[0].year);

      expect((screen.getByTestId('posterImage') as HTMLImageElement).src).toEqual(items[0].poster);
    });
  });
});
