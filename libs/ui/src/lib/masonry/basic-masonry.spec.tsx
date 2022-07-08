import { render } from '@testing-library/react';

import BasicMasonry from './basic-masonry';

describe('BasicMasonry', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasicMasonry />);
    expect(baseElement).toBeTruthy();
  });
});
