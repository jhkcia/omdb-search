import { render } from '@testing-library/react';
import { MovieListFooter } from './MovieListFooter';

describe('<MovieListFooter />', () => {
  describe('render list', () => {
    it('show has more', async () => {
      render(<MovieListFooter hasMore={true} handleLoadMore={() => { }} />);

    });
  });
});
