import { render } from '@testing-library/react';

import ControlledAccordion from './controlled-accordion';

describe('ControlledAccordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ControlledAccordion />);
    expect(baseElement).toBeTruthy();
  });
});
