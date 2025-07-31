import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { BreadcrumbProvider, useBreadcrumb } from "./components/breadcrumb";
import { useLingui } from "@lingui/react/macro";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { getLocale, loadCatalog, LocaleSwitch } from "./i18n";
import { router } from "./router";

const RouterWithContext = () => {
  const breadcrumb = useBreadcrumb();
  const { i18n } = useLingui();
  return <RouterProvider router={router} context={{ breadcrumb, i18n }} />;
};

const main = async () => {
  await loadCatalog(getLocale());

  const rootElement = document.getElementById("root")!;
  if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <StrictMode>
        <I18nProvider i18n={i18n}>
          <LocaleSwitch />
          <BreadcrumbProvider>
            <RouterWithContext />
          </BreadcrumbProvider>
        </I18nProvider>
      </StrictMode>
    );
  }
};

main();
