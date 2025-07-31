import { Outlet, createFileRoute } from "@tanstack/react-router";
import { router } from "../../router";

export const Route = createFileRoute("/app/$appId")({
  onEnter: ({ context }) => {
    console.log("onEnter::uicore::app");
    const title = context.i18n._({ id: "apps", message: "Apps" });
    context.breadcrumb.dispatch({
      type: "PUSH",
      payload: {
        pushedBy: "uicore",
        title,
        onClick: () => {
          router.navigate({ to: "/app" });
        },
      },
    });
  },
  onLeave: ({ context }) => {
    console.log("onLeave::uicore::app");
    context.breadcrumb.dispatch({
      type: "POP",
    });
  },
  component: AppLayoutComponent,
});

function AppLayoutComponent() {
  return (
    <div>
      <h1>App Layout</h1>
      <Outlet />
    </div>
  );
}
