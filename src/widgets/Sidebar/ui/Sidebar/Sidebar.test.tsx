import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

// eslint-disable-next-line max-len
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  it('render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  it('toggle sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const button = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
