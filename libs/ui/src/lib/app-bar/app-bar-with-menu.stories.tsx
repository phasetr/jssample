import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppBarWithMenu } from './app-bar-with-menu';

export default {
  component: AppBarWithMenu,
  title: 'AppBarWithMenu',
} as ComponentMeta<typeof AppBarWithMenu>;

const Template: ComponentStory<typeof AppBarWithMenu> = (args) => (
  <AppBarWithMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
