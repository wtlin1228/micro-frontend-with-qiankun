import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import App from "./App.tsx";
import { Dispatch } from "./types";
import { getLocale, loadCatalog } from "./i18n.tsx";

const DEBUG: 0 | 1 | 2 | 3 = 0;
const log = (...args: any[]) => {
  if (DEBUG) {
    console.log(...args);
  }
};

let root: Root | null = null;

/**
 * The bootstrap will only be called once when the child application is initialized.
 * The next time the child application re-enters, the mount hook will be called directly, and bootstrap will not be triggered repeatedly.
 * Usually we can do some initialization of global variables here,
 * such as application-level caches that will not be destroyed during the unmount phase.
 */
export async function bootstrap() {
  log("kirby app bootstrap");
}

/**
 * The mount method is called every time the application enters,
 * usually we trigger the application's rendering method here.
 */
export async function mount(props: {
  container?: HTMLElement;
  dispatch: Dispatch;
}) {
  log("kirby app mount", props);

  await loadCatalog(getLocale());

  if (!root) {
    const container = props.container
      ? props.container.querySelector("#root")
      : document.getElementById("root");
    root = createRoot(container!);
  }

  root.render(
    <StrictMode>
      <App dispatch={props.dispatch} />
    </StrictMode>
  );
}

/**
 * Methods that are called each time the application is switched/unloaded,
 * usually in this case we uninstall the application instance of the subapplication.
 */
export async function unmount(props: any) {
  log("kirby app unmount", props);

  if (root) {
    root.unmount();
    root = null;
  }
}

/**
 * Optional lifecycle，just available with loadMicroApp way
 */
export async function update(props: any) {
  log("kirby app update", props);
}
