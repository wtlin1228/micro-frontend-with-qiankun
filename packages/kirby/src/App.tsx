import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Dispatch } from "./types";

const theme = createTheme({
  cssVariables: true,
});

function App(props: { dispatch: Dispatch }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Kirby</h1>

      <Button
        variant="contained"
        onClick={() =>
          props.dispatch({
            type: "PUSH",
            payload: {
              item: {
                title: "Kirby",
                onClick: () => {
                  console.log("kirby");
                },
              },
            },
          })
        }
      >
        Add Kirby to breadbrumb
      </Button>

      <Button
        variant="contained"
        onClick={() =>
          props.dispatch({
            type: "PUSH",
            payload: {
              item: {
                title: "Waddle",
                onClick: () => {
                  console.log("Waddle");
                },
              },
            },
          })
        }
      >
        Add Waddle to breadbrumb
      </Button>
    </ThemeProvider>
  );
}

export default App;
