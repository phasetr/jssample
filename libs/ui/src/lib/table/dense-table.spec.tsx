import { render } from '@testing-library/react';

import DenseTable from './dense-table';

describe('DenseTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DenseTable />);
    expect(baseElement).toBeTruthy();
  });
});
