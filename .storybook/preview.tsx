import React from "react";
import type { Preview } from "@storybook/react";
import "../src/index.css";
import { ThemeProvider } from "../src/providers/ThemeProvider/ThemeProvider";

export const decorators = [
  (Story) => {
    const [theme, setTheme] = React.useState("light");
    const [preset, setPreset] = React.useState("default");

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              htmlFor="theme"
              style={{
                fontSize: "14px",
                color: "#818181",
              }}
            >
              Theme:
            </label>
            <select
              name="theme"
              onChange={(e) => {
                setTheme(e.target.value);
              }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              htmlFor="preset"
              style={{
                fontSize: "14px",
                color: "#818181",
              }}
            >
              Preset:
            </label>
            <select
              name="preset"
              onChange={(e) => {
                setPreset(e.target.value);
              }}
            >
              <option value="default">Default</option>
              <option value="orange">Orange</option>
              <option value="blue">Blue</option>
            </select>
          </div>
        </div>

        <ThemeProvider theme={theme} preset={preset}>
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
        </ThemeProvider>
      </div>
    );
  },
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
