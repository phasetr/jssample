import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LeftMenu } from './left-menu';

export default {
  component: LeftMenu,
  title: 'LeftMenu',
} as ComponentMeta<typeof LeftMenu>;

const Template: ComponentStory<typeof LeftMenu> = (args) => (
  <LeftMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
