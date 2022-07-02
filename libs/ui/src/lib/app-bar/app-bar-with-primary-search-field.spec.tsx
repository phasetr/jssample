import { render } from '@testing-library/react';

import AppBarWithPrimarySearchField from './app-bar-with-primary-search-field';

describe('AppBarWithPrimarySearchField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppBarWithPrimarySearchField />);
    expect(baseElement).toBeTruthy();
  });
});
