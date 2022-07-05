import { render } from '@testing-library/react';

import GridWithMultipleBreakPoints from './grid-with-multiple-break-points';

describe('GridWithMultipleBreakPoints', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GridWithMultipleBreakPoints />);
    expect(baseElement).toBeTruthy();
  });
});
