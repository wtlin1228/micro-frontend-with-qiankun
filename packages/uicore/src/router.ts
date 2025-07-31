import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const router = createRouter({
  routeTree,
  context: {
    // see https://tanstack.com/router/v1/docs/framework/react/guide/router-context#how-about-using-react-contexthooks
    breadcrumb: undefined!,
    i18n: undefined!,
  },
});
