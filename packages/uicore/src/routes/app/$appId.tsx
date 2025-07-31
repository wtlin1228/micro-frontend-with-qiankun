import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/$appId")({
  onEnter: () => {
    console.log("app:onEnter");
  },
  onLeave: () => {
    console.log("app:onLeave");
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
