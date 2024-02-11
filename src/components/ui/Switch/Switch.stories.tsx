import type { Meta, StoryFn } from "@storybook/react";

import { Switch } from "./switch";

import { getListTemplate, getTemplate } from "../../../utils/storybook";

const meta = {
  title: "Atoms/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Switch>;

export default meta;

const Template: StoryFn = getTemplate(Switch);

export const Default: StoryFn = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
};
