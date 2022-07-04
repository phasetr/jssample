import { render } from '@testing-library/react';

import H2Sample01 from './h2-sample01';

describe('H2Sample01', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<H2Sample01 />);
    expect(baseElement).toBeTruthy();
  });
});
