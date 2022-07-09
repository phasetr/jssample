import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DataTable } from './data-table';

export default {
  component: DataTable,
  title: 'DataTable',
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = (args) => (
  <DataTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
