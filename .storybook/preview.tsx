import React from "react";
import type { Preview } from "@storybook/react";

export const decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: "12px 12px",
        flexWrap: "wrap",
      }}
    >
      <Story />
    </div>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
