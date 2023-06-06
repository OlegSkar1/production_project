import { Story } from '@storybook/react';
// eslint-disable-next-line olegskar-fsd-checker/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (StoryComponent: Story) => (
  <div style={{ padding: 20 }}>
    <StoryComponent />
  </div>
);
