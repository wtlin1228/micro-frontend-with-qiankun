import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { Dispatch } from "../types";

export const Route = createRootRouteWithContext<{
  dispatch: Dispatch;
  i18n: undefined;
}>()({
  component: () => (
    <>
      <h1>Kirby</h1>
      <Outlet />
    </>
  ),
});
