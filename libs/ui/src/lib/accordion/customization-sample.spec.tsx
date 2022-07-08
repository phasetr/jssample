import { render } from '@testing-library/react';

import CustomizationSample from './customization-sample';

describe('CustomizationSample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomizationSample />);
    expect(baseElement).toBeTruthy();
  });
});
