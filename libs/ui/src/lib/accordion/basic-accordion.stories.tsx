import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicAccordion } from './basic-accordion';

export default {
  component: BasicAccordion,
  title: 'BasicAccordion',
} as ComponentMeta<typeof BasicAccordion>;

const Template: ComponentStory<typeof BasicAccordion> = (_args) => (
  <BasicAccordion />
);

export const Primary = Template.bind({});
Primary.args = {};
