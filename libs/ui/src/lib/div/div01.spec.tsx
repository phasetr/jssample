import { render } from '@testing-library/react';

import Div01 from './div01';

describe('Div01', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Div01 />);
    expect(baseElement).toBeTruthy();
  });
});
