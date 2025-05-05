import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { MicroApps } from "../components/micro-apps";

export const Route = createRootRoute({
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
      <Outlet />
      <MicroApps />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
