import { registerMicroApps, RegistrableApp, start } from "qiankun";
import { useEffect, useMemo } from "react";
import { useBreadcrumb } from "./breadcrumb";

const APP_CONTAINER = "app-container";

const useRegisterableApps = () => {
  const { dispatch } = useBreadcrumb();

  return useMemo(() => {
    const apps: RegistrableApp<{
      displayName: string;
      dispatch: typeof dispatch;
    }>[] = [
      {
        name: "kirby app",
        entry: "http://localhost:3001/index.html",
        container: `#${APP_CONTAINER}`,
        // loader: (loading) => {
        //   console.log("RegistrableApp::loader::kirbyApp", loading);
        // },
        activeRule: "/app/kirby",
        props: {
          displayName: "KIRBY",
          dispatch,
        },
      },
      {
        name: "pikmin app",
        entry: "http://localhost:3002/index.html",
        container: `#${APP_CONTAINER}`,
        // loader: (loading) => {
        //   console.log("RegistrableApp::loader::pikminApp", loading);
        // },
        activeRule: "/app/pikmin",
        props: {
          displayName: "PIKMIN",
          dispatch,
        },
      },
    ];

    return apps;
  }, [dispatch]);
};

export const MicroApps = () => {
  const registerableApps = useRegisterableApps();

  useEffect(() => {
    registerMicroApps(registerableApps);
    start({ prefetch: false });
  }, [registerableApps]);

  return (
    <>
      <div id={APP_CONTAINER}></div>
    </>
  );
};
