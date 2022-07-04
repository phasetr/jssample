import { render } from '@testing-library/react';

import H2Sample04 from './h2-sample04';

describe('H2Sample04', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<H2Sample04 />);
    expect(baseElement).toBeTruthy();
  });
});
