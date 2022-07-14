import { render } from '@testing-library/react';

import Deposits from './deposits';

describe('Deposits', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Deposits />);
    expect(baseElement).toBeTruthy();
  });
});
