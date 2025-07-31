import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { MicroApps } from "../components/micro-apps";
import { Breadcrumb, useBreadcrumb } from "../components/breadcrumb";
import { I18n } from "@lingui/core";

interface MyRouterContext {
  breadcrumb: ReturnType<typeof useBreadcrumb>;
  i18n: I18n;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  onEnter: ({ context }) => {
    const title = context.i18n._({ id: "workspace", message: "Workspace" });
    context.breadcrumb.dispatch({
      type: "PUSH",
      payload: {
        item: {
          title,
          onClick: () => {
            console.log("navigate to workspace");
          },
        },
      },
    });
  },
  onLeave: () => {},
  component: () => (
    <>
      <div>
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
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
