import { render } from '@testing-library/react';

import ComboBox from './combo-box';

describe('ComboBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComboBox />);
    expect(baseElement).toBeTruthy();
  });
});
