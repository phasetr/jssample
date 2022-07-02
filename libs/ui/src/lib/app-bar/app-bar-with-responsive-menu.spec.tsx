import { render } from '@testing-library/react';

import AppBarWithResponsiveMenu from './app-bar-with-responsive-menu';

describe('AppBarWithResponsiveMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppBarWithResponsiveMenu />);
    expect(baseElement).toBeTruthy();
  });
});
