import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EnableColorOnDarkAppBar } from './enable-color-on-dark-app-bar';

export default {
  component: EnableColorOnDarkAppBar,
  title: 'EnableColorOnDarkAppBar',
} as ComponentMeta<typeof EnableColorOnDarkAppBar>;

const Template: ComponentStory<typeof EnableColorOnDarkAppBar> = (args) => (
  <EnableColorOnDarkAppBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
