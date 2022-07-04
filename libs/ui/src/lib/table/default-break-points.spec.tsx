import { render } from '@testing-library/react';

import DefaultBreakPointsTable from './default-break-points-table';

describe('DefaultBreakPointsTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefaultBreakPointsTable />);
    expect(baseElement).toBeTruthy();
  });
});
