import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ControlledAccordion } from './controlled-accordion';

export default {
  component: ControlledAccordion,
  title: 'ControlledAccordion',
} as ComponentMeta<typeof ControlledAccordion>;

const Template: ComponentStory<typeof ControlledAccordion> = (args) => (
  <ControlledAccordion {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
