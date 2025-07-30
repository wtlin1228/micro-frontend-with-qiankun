import { createFileRoute } from "@tanstack/react-router";

// Note the trailing slash, which is used to target index routes
export const Route = createFileRoute("/app/")({
  component: AppIndexComponent,
});

function AppIndexComponent() {
  return <div>Please select an App!</div>;
}
