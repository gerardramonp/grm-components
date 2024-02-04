import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "./button";
import { ThemeProvider } from "@/providers/ThemeProvider/ThemeProvider";

const meta = {
  title: "Example/Button",
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
  },
} satisfies Meta<typeof Button>;

export default meta;

const Template: StoryFn = (args) => (
  <ThemeProvider theme="light" preset="blue">
    <Button {...args}>asdasd</Button>
  </ThemeProvider>
);

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
