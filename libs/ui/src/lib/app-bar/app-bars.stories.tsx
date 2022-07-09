import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppBars } from './app-bars';

export default {
  component: AppBars,
  title: 'AppBars',
} as ComponentMeta<typeof AppBars>;

const Template: ComponentStory<typeof AppBars> = (args) => (
  <AppBars {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
