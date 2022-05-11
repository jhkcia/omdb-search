import { render, screen } from '@testing-library/react';
import { MovieCard } from './MovieCard';

describe('<MovieCard />', () => {
  describe('render movie', () => {
    it('render content properly', async () => {
      let item = {
        title: "My God! Father",
        year: "2020",
        imdbID: "tt13476378",
        type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BMjYzOTQ4NzItYTliMS00Nzc1LWEzNTctMDY5MGU5YWMxNmYxXkEyXkFqcGdeQXVyMTEzNDczNjY3._V1_SX300.jpg"
      };

      render(<MovieCard item={item} />);

      expect(screen.getByTestId('titleText')).toHaveTextContent(item.title);
      expect(screen.getByTestId('typeText')).toHaveTextContent(item.type);
      expect(screen.getByTestId('yearText')).toHaveTextContent(item.year);

      expect((screen.getByTestId('posterImage') as HTMLImageElement).src).toEqual(item.poster);
    });
  });
});