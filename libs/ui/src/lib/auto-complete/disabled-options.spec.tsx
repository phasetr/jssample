import { render } from '@testing-library/react';

import DisabledOptions from './disabled-options';

describe('DisabledOptions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DisabledOptions />);
    expect(baseElement).toBeTruthy();
  });
});
