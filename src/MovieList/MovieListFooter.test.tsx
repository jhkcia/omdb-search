import { render, screen } from '@testing-library/react';
import { MovieListFooter } from './MovieListFooter';

describe('<MovieListFooter />', () => {
  describe('render list', () => {
    it('show next and previous', async () => {
      const onChange = jest.fn();

      render(<MovieListFooter page={2} onChange={onChange} count={4} />);
      expect(screen.getByTestId('nextPageTest')).toBeVisible();
      expect(screen.getByTestId('previousPageTest')).toBeVisible();
    });
    it('not show previous on first page', async () => {
      const onChange = jest.fn();

      render(<MovieListFooter page={1} onChange={onChange} count={4} />);
      expect(screen.getByTestId('nextPageTest')).toBeVisible();
      expect(screen.queryByTestId('previousPageTest')).toBeNull();
    });

    it('not show next on last page', async () => {
      const onChange = jest.fn();

      render(<MovieListFooter page={4} onChange={onChange} count={4} />);
      expect(screen.queryByTestId('nextPageTest')).toBeNull();
      expect(screen.getByTestId('previousPageTest')).toBeVisible();
    });
  });
});
