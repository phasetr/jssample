import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemsWithVariableHeight } from './items-with-variable-height';

export default {
  component: ItemsWithVariableHeight,
  title: 'ItemsWithVariableHeight',
} as ComponentMeta<typeof ItemsWithVariableHeight>;

const Template: ComponentStory<typeof ItemsWithVariableHeight> = (args) => (
  <ItemsWithVariableHeight {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
