import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Dispatch } from "./types";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { useLingui } from "@lingui/react/macro";

const theme = createTheme({
  cssVariables: true,
});

const RouterWithContext = (props: { dispatch: Dispatch }) => {
  const { i18n } = useLingui();

  return (
    <RouterProvider
      router={router}
      context={{ dispatch: props.dispatch, i18n }}
    />
  );
};

function App(props: { dispatch: Dispatch }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <I18nProvider i18n={i18n}>
        <RouterWithContext dispatch={props.dispatch} />
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
