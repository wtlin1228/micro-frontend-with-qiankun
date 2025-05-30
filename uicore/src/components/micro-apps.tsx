import { registerMicroApps, RegistrableApp, start } from "qiankun";
import { useEffect } from "react";

const APP_CONTAINER = "app-container";

const registerableApps: RegistrableApp<{
  displayName: string;
}>[] = [
  {
    name: "kirby app",
    entry: "/app-statics/kirby/index.html",
    container: `#${APP_CONTAINER}`,
    loader: (loading) => {
      console.log("RegistrableApp::loader::kirbyApp", loading);
    },
    activeRule: "/app/kirby",
    props: {
      displayName: "KIRBY",
    },
  },
  {
    name: "pikmin app",
    entry: "/app-statics/pikmin/index.html",
    container: `#${APP_CONTAINER}`,
    loader: (loading) => {
      console.log("RegistrableApp::loader::pikminApp", loading);
    },
    activeRule: "/app/pikmin",
    props: {
      displayName: "PIKMIN",
    },
  },
];

export const MicroApps = () => {
  useEffect(() => {
    registerMicroApps(registerableApps);
    start({ prefetch: false });
  }, []);

  return (
    <>
      <div id={APP_CONTAINER}></div>
    </>
  );
};
