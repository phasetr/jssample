import { render } from '@testing-library/react';

import ProminentAppBar from './prominent-app-bar';

describe('ProminentAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProminentAppBar />);
    expect(baseElement).toBeTruthy();
  });
});
