import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DenseAppBar } from './dense-app-bar';

export default {
  component: DenseAppBar,
  title: 'DenseAppBar',
} as ComponentMeta<typeof DenseAppBar>;

const Template: ComponentStory<typeof DenseAppBar> = (args) => (
  <DenseAppBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
