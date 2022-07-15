import { render } from '@testing-library/react';

import Grouped from './grouped';

describe('Grouped', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Grouped />);
    expect(baseElement).toBeTruthy();
  });
});
