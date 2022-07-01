import { render } from '@testing-library/react';

import Link2 from './link2';

describe('Link2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Link2 to={'#'} />);
    expect(baseElement).toBeTruthy();
  });
});
