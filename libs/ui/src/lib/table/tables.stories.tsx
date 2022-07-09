import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tables } from './tables';

export default {
  component: Tables,
  title: 'Tables',
} as ComponentMeta<typeof Tables>;

const Template: ComponentStory<typeof Tables> = (args) => <Tables {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
