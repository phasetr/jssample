import { render } from '@testing-library/react';

import AppBarWithSearchField from './app-bar-with-search-field';

describe('AppBarWithSearchField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppBarWithSearchField />);
    expect(baseElement).toBeTruthy();
  });
});
