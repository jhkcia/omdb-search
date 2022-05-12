import { render, screen } from '@testing-library/react';
import { MovieListHeader } from './MovieListHeader';

describe('<MovieListHeader />', () => {
  describe('render header', () => {
    it('show when result available', async () => {
      render(<MovieListHeader query={'Father'} pageNumber={1} totalResults={123} error={''} />);

      expect(screen.getByTestId('currentQueryInfoTest')).toHaveTextContent('page 1 of 123 result for');
      expect(screen.getByTestId('errorText')).toHaveTextContent("");

    });
    it('show when error', async () => {
      render(<MovieListHeader query={"salam"} pageNumber={1} totalResults={0} error={'Movie not found!'} />);

      expect(screen.getByTestId('currentQueryInfoTest')).toHaveTextContent('Your search - salam - did not match any movie.');
      expect(screen.getByTestId('errorText')).toHaveTextContent("Movie not found!");
    });
    it('show single page', async () => {
    });

  });
});
