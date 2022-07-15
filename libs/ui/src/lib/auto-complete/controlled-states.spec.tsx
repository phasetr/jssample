import { render } from '@testing-library/react';

import ControlledStates from './controlled-states';

describe('ControlledStates', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ControlledStates />);
    expect(baseElement).toBeTruthy();
  });
});
