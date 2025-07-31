type Action =
  | {
      type: "PUSH";
      payload: { pushedBy: string; title: string; onClick: () => void };
    }
  | {
      type: "POP";
    }
  | {
      type: "UNMOUNT APP";
      payload: { appId: string };
    };

export type Dispatch = React.ActionDispatch<[action: Action]>;
