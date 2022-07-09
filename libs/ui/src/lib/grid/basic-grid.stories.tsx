import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicGrid } from './basic-grid';

export default {
  component: BasicGrid,
  title: 'BasicGrid',
} as ComponentMeta<typeof BasicGrid>;

const Template: ComponentStory<typeof BasicGrid> = (args) => (
  <BasicGrid {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
