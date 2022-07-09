import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DenseTable } from './dense-table';

export default {
  component: DenseTable,
  title: 'DenseTable',
} as ComponentMeta<typeof DenseTable>;

const Template: ComponentStory<typeof DenseTable> = (args) => (
  <DenseTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
