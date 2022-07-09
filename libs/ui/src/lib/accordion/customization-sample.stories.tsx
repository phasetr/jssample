import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomizationSample } from './customization-sample';

export default {
  component: CustomizationSample,
  title: 'CustomizationSample',
} as ComponentMeta<typeof CustomizationSample>;

const Template: ComponentStory<typeof CustomizationSample> = (args) => (
  <CustomizationSample {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
