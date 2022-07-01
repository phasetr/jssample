import { render } from '@testing-library/react';

import Link3 from './link3';

describe('Link3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Link3 to={'#'} />);
    expect(baseElement).toBeTruthy();
  });
});
