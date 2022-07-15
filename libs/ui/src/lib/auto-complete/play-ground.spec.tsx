import { render } from '@testing-library/react';

import PlayGround from './play-ground';

describe('PlayGround', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayGround />);
    expect(baseElement).toBeTruthy();
  });
});
