import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DataGridSample } from './data-grid-sample';

export default {
  component: DataGridSample,
  title: 'DataGridSample',
} as ComponentMeta<typeof DataGridSample>;

const Template: ComponentStory<typeof DataGridSample> = (args) => (
  <DataGridSample {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
