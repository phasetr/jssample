import { render } from '@testing-library/react';

import ItemsWithVariableHeight from './items-with-variable-height';

describe('ItemsWithVariableHeight', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemsWithVariableHeight />);
    expect(baseElement).toBeTruthy();
  });
});
