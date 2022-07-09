import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppBarWithResponsiveMenu } from './app-bar-with-responsive-menu';

export default {
  component: AppBarWithResponsiveMenu,
  title: 'AppBarWithResponsiveMenu',
} as ComponentMeta<typeof AppBarWithResponsiveMenu>;

const Template: ComponentStory<typeof AppBarWithResponsiveMenu> = (args) => (
  <AppBarWithResponsiveMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
