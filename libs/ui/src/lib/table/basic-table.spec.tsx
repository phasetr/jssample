import { render } from '@testing-library/react';

import BasicTable from './basic-table';

describe('BasicTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasicTable />);
    expect(baseElement).toBeTruthy();
  });
});
