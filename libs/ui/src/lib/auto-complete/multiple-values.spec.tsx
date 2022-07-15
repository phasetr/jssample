import { render } from '@testing-library/react';

import MultipleValues from './multiple-values';

describe('MultipleValues', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultipleValues />);
    expect(baseElement).toBeTruthy();
  });
});
