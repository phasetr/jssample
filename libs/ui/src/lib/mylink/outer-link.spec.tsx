import { render } from '@testing-library/react';

import OuterLink from './outer-link';

describe('OuterLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <OuterLink href="/" key="key" content="content" />
    );
    expect(baseElement).toBeTruthy();
  });
});
