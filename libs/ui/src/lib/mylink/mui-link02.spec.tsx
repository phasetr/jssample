import { render } from '@testing-library/react';

import MuiLink02 from './mui-link02';

describe('MuiLink02', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiLink02 />);
    expect(baseElement).toBeTruthy();
  });
});
