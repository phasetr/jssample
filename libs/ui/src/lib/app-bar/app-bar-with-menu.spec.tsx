import { render } from '@testing-library/react';

import AppBarWithMenu from './app-bar-with-menu';

describe('AppBarWithMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppBarWithMenu />);
    expect(baseElement).toBeTruthy();
  });
});
