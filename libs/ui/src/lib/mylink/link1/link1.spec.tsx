import { render } from '@testing-library/react';

import Link1 from './link1';

describe('Link1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Link1 to={'#'} />);
    expect(baseElement).toBeTruthy();
  });
});
