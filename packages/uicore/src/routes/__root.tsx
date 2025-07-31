import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { MicroApps } from "../components/micro-apps";
import { Breadcrumb, useBreadcrumb } from "../components/breadcrumb";
import { I18n } from "@lingui/core";
import { router } from "../router";

interface MyRouterContext {
  breadcrumb: ReturnType<typeof useBreadcrumb>;
  i18n: I18n;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  onEnter: ({ context }) => {
    const title = context.i18n._({ id: "home", message: "Home" });
    context.breadcrumb.dispatch({
      type: "PUSH",
      payload: {
        title,
        onClick: () => {
          router.navigate({ to: "/" });
        },
      },
    });
  },
  onLeave: () => {},
  component: () => (
    <>
      <div style={{ display: "flex", gap: "8px", marginBlock: "8px" }}>
        <p style={{ display: "inline", margin: 0 }}>Navigation:</p>
        <Link to="/">Home</Link>
        <Link
          to="/app/$appId"
          params={{
            appId: "kirby",
          }}
        >
          Kirby
        </Link>
        <Link
          to="/app/$appId"
          params={{
            appId: "pikmin",
          }}
        >
          Pikmin
        </Link>
      </div>
      <hr />
      <Breadcrumb />
      <Outlet />
      <MicroApps />
    </>
  ),
});
