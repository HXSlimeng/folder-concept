import { createTheme, NextUIProvider } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
});

const lightTheme = createTheme({
  type: "light",
});

//@ts-ignore
export const ThemeProvider = ({ children }) => <NextUIProvider theme={darkTheme}>{children}</NextUIProvider>;
