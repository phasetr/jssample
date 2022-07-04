import { render } from '@testing-library/react';

import H2Sample03 from './h2-sample03';

describe('H2Sample03', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<H2Sample03 />);
    expect(baseElement).toBeTruthy();
  });
});
