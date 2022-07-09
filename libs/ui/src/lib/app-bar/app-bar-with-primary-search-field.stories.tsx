import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppBarWithPrimarySearchField } from './app-bar-with-primary-search-field';

export default {
  component: AppBarWithPrimarySearchField,
  title: 'AppBarWithPrimarySearchField',
} as ComponentMeta<typeof AppBarWithPrimarySearchField>;

const Template: ComponentStory<typeof AppBarWithPrimarySearchField> = (
  args
) => <AppBarWithPrimarySearchField {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
