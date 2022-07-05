import { render } from '@testing-library/react';

import Div03 from './div03';

describe('Div03', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Div03 />);
    expect(baseElement).toBeTruthy();
  });
});
