import React from "react";

import InBoxScreen from "./in-box-screen";
import store from "./store";
import { rest } from "msw";
import { MockedState } from "./task-list.stories";
import { Provider } from "react-redux";

import {
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "@storybook/testing-library";

export default {
  component: InBoxScreen,
  title: "InBoxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = () => <InBoxScreen />;

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://jsonplaceholder.typicode.com/todos?userId=1",
        (req, res, ctx) => {
          return res(ctx.json(MockedState.tasks));
        }
      ),
    ],
  },
};
export const Error = Template.bind({});
Error.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://jsonplaceholder.typicode.com/todos?userId=1",
        (req, res, ctx) => {
          return res(ctx.status(403));
        }
      ),
    ],
  },
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // Waits for the component to transition from the loading state
  await waitForElementToBeRemoved(await canvas.findByTestId("loading"));
  // Waits for the component to be updated based on the store
  await waitFor(async () => {
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText("pinTask-1"));
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText("pinTask-3"));
  });
};
