import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Dispatch } from "./types";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

const theme = createTheme({
  cssVariables: true,
});

const RouterWithContext = (props: { dispatch: Dispatch }) => {
  // const { i18n } = useLingui();
  return (
    <RouterProvider
      router={router}
      context={{ dispatch: props.dispatch, i18n: undefined }}
    />
  );
};

function App(props: { dispatch: Dispatch }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterWithContext dispatch={props.dispatch} />
    </ThemeProvider>
  );
}

export default App;
