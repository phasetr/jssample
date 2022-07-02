import { render } from '@testing-library/react';

import EnableColorOnDarkAppBar from './enable-color-on-dark-app-bar';

describe('EnableColorOnDarkAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EnableColorOnDarkAppBar />);
    expect(baseElement).toBeTruthy();
  });
});
