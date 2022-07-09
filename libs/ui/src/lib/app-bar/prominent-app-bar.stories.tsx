import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProminentAppBar } from './prominent-app-bar';

export default {
  component: ProminentAppBar,
  title: 'ProminentAppBar',
} as ComponentMeta<typeof ProminentAppBar>;

const Template: ComponentStory<typeof ProminentAppBar> = (args) => (
  <ProminentAppBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
