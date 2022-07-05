import { render } from '@testing-library/react';

import Hr03 from './hr03';

describe('Hr03', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hr03 />);
    expect(baseElement).toBeTruthy();
  });
});
