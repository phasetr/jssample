import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicMasonry } from './basic-masonry';

export default {
  component: BasicMasonry,
  title: 'BasicMasonry',
} as ComponentMeta<typeof BasicMasonry>;

const Template: ComponentStory<typeof BasicMasonry> = (args) => (
  <BasicMasonry {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
