import { render } from '@testing-library/react';

import MyLink from './my-link';

describe('MyLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyLink />);
    expect(baseElement).toBeTruthy();
  });
});
