import { render } from '@testing-library/react';

import ResponsiveAppBarWithDrawer from './responsive-app-bar-with-drawer';

describe('ResponsiveAppBarWithDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResponsiveAppBarWithDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
