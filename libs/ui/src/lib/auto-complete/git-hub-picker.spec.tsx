import { render } from '@testing-library/react';

import GitHubPicker from './git-hub-picker';

describe('GitHubPicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GitHubPicker />);
    expect(baseElement).toBeTruthy();
  });
});
