import { render } from '@testing-library/react';

import CountrySelect from './country-select';

describe('CountrySelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CountrySelect />);
    expect(baseElement).toBeTruthy();
  });
});
