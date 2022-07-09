import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItems } from './menu-items';

export default {
  component: MenuItems,
  title: 'MenuItems',
} as ComponentMeta<typeof MenuItems>;

const Template: ComponentStory<typeof MenuItems> = (args) => (
  <MenuItems {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
