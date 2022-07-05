import { render } from '@testing-library/react';

import Div02 from './div02';

describe('Div02', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Div02 />);
    expect(baseElement).toBeTruthy();
  });
});
