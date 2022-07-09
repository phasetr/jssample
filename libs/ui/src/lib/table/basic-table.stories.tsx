import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicTable } from './basic-table';

export default {
  component: BasicTable,
  title: 'BasicTable',
} as ComponentMeta<typeof BasicTable>;

const Template: ComponentStory<typeof BasicTable> = (args) => (
  <BasicTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
