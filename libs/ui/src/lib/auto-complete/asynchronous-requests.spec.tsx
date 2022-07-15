import { render } from '@testing-library/react';

import AsynchronousRequests from './asynchronous-requests';

describe('AsynchronousRequests', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AsynchronousRequests />);
    expect(baseElement).toBeTruthy();
  });
});
