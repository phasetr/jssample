import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BottomAppBar } from './bottom-app-bar';

export default {
  component: BottomAppBar,
  title: 'BottomAppBar',
} as ComponentMeta<typeof BottomAppBar>;

const Template: ComponentStory<typeof BottomAppBar> = (args) => (
  <BottomAppBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
