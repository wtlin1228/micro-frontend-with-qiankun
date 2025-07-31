import { createFileRoute } from "@tanstack/react-router";
import { useBreadcrumb } from "../components/breadcrumb";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { dispatch } = useBreadcrumb();

  return (
    <div>
      <h1>Welcome Home!</h1>

      <button
        onClick={() =>
          dispatch({
            type: "PUSH",
            payload: {
              item: {
                title: "UI",
                onClick: () => {
                  console.log("UI");
                },
              },
            },
          })
        }
      >
        Add UI to breadbrumb
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "PUSH",
            payload: {
              item: {
                title: "Core",
                onClick: () => {
                  console.log("Core");
                },
              },
            },
          })
        }
      >
        Add Core to breadbrumb
      </button>
    </div>
  );
}
