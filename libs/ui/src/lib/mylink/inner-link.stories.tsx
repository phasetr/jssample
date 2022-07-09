import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InnerLink } from './inner-link';

export default {
  component: InnerLink,
  title: 'InnerLink',
} as ComponentMeta<typeof InnerLink>;

const Template: ComponentStory<typeof InnerLink> = (args) => (
  <InnerLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
