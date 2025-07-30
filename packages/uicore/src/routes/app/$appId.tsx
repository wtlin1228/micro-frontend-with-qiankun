import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/$appId")({
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
