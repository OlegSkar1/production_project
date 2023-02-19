import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentsRender';

describe('Sidebar', () => {
  it('render', () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  it('toggle sidebar', () => {
    ComponentRender(<Sidebar />);
    const button = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
