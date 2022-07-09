import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GridWithMultipleBreakPoints } from './grid-with-multiple-break-points';

export default {
  component: GridWithMultipleBreakPoints,
  title: 'GridWithMultipleBreakPoints',
} as ComponentMeta<typeof GridWithMultipleBreakPoints>;

const Template: ComponentStory<typeof GridWithMultipleBreakPoints> = (args) => (
  <GridWithMultipleBreakPoints {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
