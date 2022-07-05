import { render } from '@testing-library/react';

import Hr04 from './hr04';

describe('Hr04', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hr04 />);
    expect(baseElement).toBeTruthy();
  });
});
