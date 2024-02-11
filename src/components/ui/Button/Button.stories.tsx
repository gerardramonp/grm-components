import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "./button";

import { getListTemplate, getTemplate } from "@/utils/storybook";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["default", "sm", "lg", "icon"],
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

const Template: StoryFn = getTemplate(Button);

const ListTemplate: StoryFn = getListTemplate(Button);

export const Default: StoryFn = Template.bind({});
Default.args = {
  variant: "default",
  children: "content",
};

export const Destructive: StoryFn = Template.bind({});
Destructive.args = {
  children: "content",
  variant: "destructive",
};

const variants = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
];

export const AllVariants: StoryFn = ListTemplate.bind({});
AllVariants.args = {
  items: variants.map((variant) => ({ variant, children: "ello" })),
  children: "Button",
};
