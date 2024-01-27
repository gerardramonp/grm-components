import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
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
  },
} satisfies Meta<typeof Button>;

export default meta;

const Template: StoryFn = (args) => <Button {...args}>asdasd</Button>;

const ListTemplate: StoryFn = ({ items, ...args }) =>
  items.map((item: any, index: number) => {
    return (
      <Button key={index} {...args} {...item}>
        Button
      </Button>
    );
  });

export const Default: StoryFn = Template.bind({});
Default.args = {
  variant: "default",
};

export const Destructive: StoryFn = Template.bind({});
Destructive.args = {
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
  items: variants.map((variant) => ({ variant })),
};
