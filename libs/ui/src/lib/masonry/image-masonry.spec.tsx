import { render } from '@testing-library/react';

import ImageMasonry from './image-masonry';

describe('ImageMasonry', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageMasonry />);
    expect(baseElement).toBeTruthy();
  });
});
