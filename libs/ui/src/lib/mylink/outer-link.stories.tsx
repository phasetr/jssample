import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OuterLink } from './outer-link';

export default {
  component: OuterLink,
  title: 'OuterLink',
} as ComponentMeta<typeof OuterLink>;

const Template: ComponentStory<typeof OuterLink> = (args) => (
  <OuterLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
