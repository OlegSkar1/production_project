import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './Counter';

import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';

describe('Counter', () => {
  it('should return counter title', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('counter-title')).toHaveTextContent('10');
  });
  it('counter increment', async () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    await userEvent.click(screen.getByTestId('increment-btn'));

    expect(screen.getByTestId('counter-title')).toHaveTextContent('11');
  });
  it('counter decrement', async () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    await userEvent.click(screen.getByTestId('decrement-btn'));

    expect(screen.getByTestId('counter-title')).toHaveTextContent('9');
  });
});
