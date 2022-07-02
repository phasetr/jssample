import { render } from '@testing-library/react';

import InnerLink from './inner-link';

describe('InnerLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InnerLink to="/" content="content" />);
    expect(baseElement).toBeTruthy();
  });
});
