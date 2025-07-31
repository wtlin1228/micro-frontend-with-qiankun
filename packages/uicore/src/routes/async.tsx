import { createFileRoute } from "@tanstack/react-router";
import { router } from "../router";

export const Route = createFileRoute("/async")({
  onEnter: ({ context }) => {
    console.log("onEnter::uicore::async");
    context.breadcrumb.dispatch({
      type: "PUSH",
      payload: {
        pushedBy: "uicore",
        title: new Promise<string>((resolve) =>
          setTimeout(() => resolve("It works"), 3000)
        ),
        onClick: () => {
          router.navigate({ to: "/async" });
        },
      },
    });
  },
  onLeave: ({ context }) => {
    console.log("onLeave::uicore::async");
    context.breadcrumb.dispatch({
      type: "POP",
    });
  },
  component: Async,
});

function Async() {
  return (
    <div>
      <h1>Demo async breadcrumb</h1>
    </div>
  );
}
