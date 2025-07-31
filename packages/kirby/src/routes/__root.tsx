import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { I18n } from "@lingui/core";
import { Dispatch } from "../types";
import { router } from "../router";

export const Route = createRootRouteWithContext<{
  dispatch: Dispatch;
  i18n: I18n;
}>()({
  // The qiankun prevent this onEnter being called the second time entering this app.
  // That's why this breadcrumb "Kirby" only show up when we first navigate to this app.
  onEnter: ({ context }) => {
    console.log("onEnter::kirby::root");
    const title = context.i18n._({ id: "kirby", message: "Kirby" });
    context.dispatch({
      type: "PUSH",
      payload: {
        pushedBy: "kirby",
        title,
        onClick: () => {
          router.navigate({ to: "/" });
        },
      },
    });
  },
  onLeave: ({ context }) => {
    console.log("onLeave::kirby::root");
    context.dispatch({
      type: "POP",
    });
  },
  component: () => (
    <>
      <h1>Kirby</h1>
      <Outlet />
    </>
  ),
});
