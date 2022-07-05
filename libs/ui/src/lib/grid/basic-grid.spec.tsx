import { render } from '@testing-library/react';

import BasicGrid from './basic-grid';

describe('BasicGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasicGrid />);
    expect(baseElement).toBeTruthy();
  });
});
