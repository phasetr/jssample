import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageMasonry } from './image-masonry';

export default {
  component: ImageMasonry,
  title: 'ImageMasonry',
} as ComponentMeta<typeof ImageMasonry>;

const Template: ComponentStory<typeof ImageMasonry> = (args) => (
  <ImageMasonry {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
