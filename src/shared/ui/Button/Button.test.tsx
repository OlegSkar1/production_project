import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  it('render button theme', () => {
    render(<Button variant='clear'>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
