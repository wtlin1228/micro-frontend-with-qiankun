import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  cssVariables: true,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Kirby</h1>
      <Button variant="contained">Click me</Button>
    </ThemeProvider>
  );
}

export default App;
