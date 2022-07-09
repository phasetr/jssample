import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WithLeftMenu } from './with-left-menu';

export default {
  component: WithLeftMenu,
  title: 'WithLeftMenu',
} as ComponentMeta<typeof WithLeftMenu>;

const Template: ComponentStory<typeof WithLeftMenu> = (args) => (
  <WithLeftMenu {...args} >{args.children}</WithLeftMenu>
);

export const Primary = Template.bind({});
Primary.args = {};
