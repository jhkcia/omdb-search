import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchArea } from './SearchArea';

describe('<SearchArea />', () => {
  describe('clicking the send button', () => {
    it('Call handleSearch function', async () => {
      const onChange = jest.fn();

      render(<SearchArea handleSearchQuery={onChange} />);
      await userEvent.type(
        screen.getByTestId('queryText'),
        'God Father!',
      );
      userEvent.click(screen.getByTestId('searchButton'));

      expect((screen.getByTestId('queryText') as HTMLInputElement).value).toEqual('God Father!');
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith("God Father!")
    });
  });
});