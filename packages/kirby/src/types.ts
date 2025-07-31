export type Item = {
  title: string;
  onClick: () => void;
};

export type Action =
  | {
      type: "PUSH";
      payload: { item: Item };
    }
  | {
      type: "POP";
      payload: never;
    };

export type Dispatch = React.ActionDispatch<[action: Action]>;
