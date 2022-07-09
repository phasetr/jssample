import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppBarWithSearchField } from './app-bar-with-search-field';

export default {
  component: AppBarWithSearchField,
  title: 'AppBarWithSearchField',
} as ComponentMeta<typeof AppBarWithSearchField>;

const Template: ComponentStory<typeof AppBarWithSearchField> = (args) => (
  <AppBarWithSearchField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
