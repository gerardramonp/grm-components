import { StoryFn } from "@storybook/react";

export const getTemplate =
  <P extends object>(Component: React.ComponentType<P>) =>
  (args: React.PropsWithChildren<P>) => {
    const allProps = { ...Component.defaultProps, ...args };

    return <Component {...allProps} />;
  };

export const getListTemplate =
  (Component: React.ComponentType): StoryFn =>
  ({ items, ...args }: any) => {
    return items.map((item: any, index: number) => {
      const allProps = { ...Component.defaultProps, ...args };

      return <Component key={index} {...allProps} {...item} />;
    });
  };
