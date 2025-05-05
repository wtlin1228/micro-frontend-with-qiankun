import { registerMicroApps, RegistrableApp, start } from "qiankun";
import { useEffect } from "react";

const registerableApps: RegistrableApp<{
  displayName: string;
}>[] = [
  {
    name: "kirby app",
    entry: "/app-statics/kirby/index.html",
    container: "#kirby-app-container",
    activeRule: "/kirby",
    props: {
      displayName: "KIRBY",
    },
  },
  {
    name: "pikmin app",
    entry: "/app-statics/pikmin/index.html",
    container: "#pikmin-app-container",
    activeRule: "/pikmin",
    props: {
      displayName: "PIKMIN",
    },
  },
];

export const MicroApps = () => {
  useEffect(() => {
    registerMicroApps(registerableApps);
    start();
  }, []);

  return (
    <>
      <div id="kirby-app-container"></div>
      <div id="pikmin-app-container"></div>
    </>
  );
};
