import { Dispatch } from "./types";

function App(props: { dispatch: Dispatch }) {
  return (
    <>
      <h1>Pikmin</h1>

      <button
        onClick={() =>
          props.dispatch({
            type: "PUSH",
            payload: {
              item: {
                title: "Pikmin",
                onClick: () => {
                  console.log("Pikmin");
                },
              },
            },
          })
        }
      >
        Add Pikmin to breadbrumb
      </button>

      <button
        onClick={() =>
          props.dispatch({
            type: "PUSH",
            payload: {
              item: {
                title: "Oatchi",
                onClick: () => {
                  console.log("Oatchi");
                },
              },
            },
          })
        }
      >
        Add Oatchi to breadbrumb
      </button>
    </>
  );
}

export default App;
