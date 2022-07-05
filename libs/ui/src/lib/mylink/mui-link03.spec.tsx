import { render } from '@testing-library/react';

import MuiLink03 from './mui-link03';

describe('MuiLink03', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiLink03 />);
    expect(baseElement).toBeTruthy();
  });
});
