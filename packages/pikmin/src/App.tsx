import { Dispatch } from "./types";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

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
  return <RouterWithContext dispatch={props.dispatch} />;
}

export default App;
