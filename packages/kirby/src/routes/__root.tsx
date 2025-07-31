import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { I18n } from "@lingui/core";
import { Dispatch } from "../types";
import { router } from "../router";

export const Route = createRootRouteWithContext<{
  dispatch: Dispatch;
  i18n: I18n;
}>()({
  onEnter: ({ context }) => {
    const title = context.i18n._({ id: "kirby", message: "Kirby" });
    context.dispatch({
      type: "PUSH",
      payload: {
        title,
        onClick: () => {
          router.navigate({ to: "/" });
        },
      },
    });
  },
  onLeave: ({ context }) => {
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
