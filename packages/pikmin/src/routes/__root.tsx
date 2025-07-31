import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { Dispatch } from "../types";

export const Route = createRootRouteWithContext<{
  dispatch: Dispatch;
  i18n: undefined;
}>()({
  component: () => (
    <>
      <h1>Pikmin</h1>
      <Outlet />
    </>
  ),
});
