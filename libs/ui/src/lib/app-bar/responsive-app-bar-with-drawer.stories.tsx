import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResponsiveAppBarWithDrawer } from './responsive-app-bar-with-drawer';

export default {
  component: ResponsiveAppBarWithDrawer,
  title: 'ResponsiveAppBarWithDrawer',
} as ComponentMeta<typeof ResponsiveAppBarWithDrawer>;

const Template: ComponentStory<typeof ResponsiveAppBarWithDrawer> = (args) => (
  <ResponsiveAppBarWithDrawer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
