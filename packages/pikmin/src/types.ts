type Action =
  | {
      type: "PUSH";
      payload: { title: string; onClick: () => void };
    }
  | {
      type: "POP";
    };

export type Dispatch = React.ActionDispatch<[action: Action]>;
