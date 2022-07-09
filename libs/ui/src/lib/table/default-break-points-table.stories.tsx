import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultBreakPointsTable } from './default-break-points-table';

export default {
  component: DefaultBreakPointsTable,
  title: 'DefaultBreakPointsTable',
} as ComponentMeta<typeof DefaultBreakPointsTable>;

const Template: ComponentStory<typeof DefaultBreakPointsTable> = (args) => (
  <DefaultBreakPointsTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
