import { render } from '@testing-library/react';

import Hr01 from './hr01';

describe('Hr01', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hr01 />);
    expect(baseElement).toBeTruthy();
  });
});
