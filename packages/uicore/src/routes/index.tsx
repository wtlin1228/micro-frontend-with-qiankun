import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Link to="/async">Navigate to async page</Link>
    </div>
  );
}
