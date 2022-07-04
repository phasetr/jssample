import { render } from '@testing-library/react';

import SortingAndSelectingTable from './sorting-and-selecting-table';

describe('SortingAndSelectingTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SortingAndSelectingTable />);
    expect(baseElement).toBeTruthy();
  });
});
