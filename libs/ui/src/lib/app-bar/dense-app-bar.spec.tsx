import { render } from '@testing-library/react';

import DenseAppBar from './dense-app-bar';

describe('DenseAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DenseAppBar />);
    expect(baseElement).toBeTruthy();
  });
});
