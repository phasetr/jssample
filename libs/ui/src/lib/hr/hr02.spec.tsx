import { render } from '@testing-library/react';

import Hr02 from './hr02';

describe('Hr02', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hr02 />);
    expect(baseElement).toBeTruthy();
  });
});
