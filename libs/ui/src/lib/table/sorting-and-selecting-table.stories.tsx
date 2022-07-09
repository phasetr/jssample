import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SortingAndSelectingTable } from './sorting-and-selecting-table';

export default {
  component: SortingAndSelectingTable,
  title: 'SortingAndSelectingTable',
} as ComponentMeta<typeof SortingAndSelectingTable>;

const Template: ComponentStory<typeof SortingAndSelectingTable> = (args) => (
  <SortingAndSelectingTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
