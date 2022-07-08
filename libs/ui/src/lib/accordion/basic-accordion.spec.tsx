import { render } from '@testing-library/react';

import BasicAccordion from './basic-accordion';

describe('BasicAccordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasicAccordion />);
    expect(baseElement).toBeTruthy();
  });
});
