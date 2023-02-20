import { Story } from '@storybook/react';

import { Portal } from 'shared/ui';

export const PortalDecorator = (StoryComponent: Story) => {
  const modal = document.createElement('div');
  const root = document.querySelector('.app');
  root.appendChild(modal);
  return (
    <Portal element={modal}>
      <StoryComponent />
    </Portal>
  );
};
