import { render } from '@testing-library/react';

import DataGridSample from './data-grid-sample';

describe('DataGridSample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataGridSample />);
    expect(baseElement).toBeTruthy();
  });
});
