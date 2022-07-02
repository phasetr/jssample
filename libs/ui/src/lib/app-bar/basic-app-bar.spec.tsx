import { render } from '@testing-library/react';

import BasicAppBar from './basic-app-bar';

describe('BasicAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasicAppBar />);
    expect(baseElement).toBeTruthy();
  });
});
