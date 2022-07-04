import { render } from '@testing-library/react';

import H2Sample02 from './h2-sample02';

describe('H2Sample02', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<H2Sample02 />);
    expect(baseElement).toBeTruthy();
  });
});
