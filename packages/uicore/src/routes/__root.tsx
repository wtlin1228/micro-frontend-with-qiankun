import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { MicroApps } from "../components/micro-apps";
import { Breadcrumb } from "../components/breadcrumb";

export const Route = createRootRoute({
  onEnter: () => {
    console.log("root:onEnter");
  },
  onLeave: () => {
    console.log("root:onLeave");
  },
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
