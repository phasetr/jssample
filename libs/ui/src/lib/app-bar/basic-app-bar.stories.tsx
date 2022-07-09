import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicAppBar } from './basic-app-bar';

export default {
  component: BasicAppBar,
  title: 'BasicAppBar',
} as ComponentMeta<typeof BasicAppBar>;

const Template: ComponentStory<typeof BasicAppBar> = (args) => (
  <BasicAppBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
