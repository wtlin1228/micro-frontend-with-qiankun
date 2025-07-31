import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer,
} from "react";

type Item = {
  pushedBy: string;
  title: string;
  onClick: () => void;
};

type State = {
  items: Item[];
};

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

const BreadcrumbContext = createContext<{
  state: State;
  dispatch: React.ActionDispatch<[action: Action]>;
} | null>(null);

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (context === null) {
    throw new Error("useBreadcrumb need a be under the BreadcrumbProvider");
  }
  return context;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "POP":
      console.log(`Pop`, state);

      const len = state.items.length;
      if (len === 0) {
        return state;
      } else {
        return {
          ...state,
          items: state.items.slice(0, len - 1),
        };
      }
    case "PUSH":
      console.log(`Push ${action.payload.title}`, state);

      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "UNMOUNT APP":
      console.log(`Unmount App ${action.payload.appId}`, state);
      return {
        ...state,
        items: state.items.filter(
          (item) => item.pushedBy !== action.payload.appId
        ),
      };
    default:
      return state;
  }
};

export const BreadcrumbProvider: React.FC<PropsWithChildren> = (props) => {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <BreadcrumbContext.Provider value={value}>
      {props.children}
    </BreadcrumbContext.Provider>
  );
};

export const Breadcrumb = () => {
  const { state } = useBreadcrumb();

  return (
    <div style={{ display: "flex", gap: "8px", marginBlock: "8px" }}>
      <p style={{ display: "inline", margin: 0 }}>Breadcrumb:</p>
      {state.items.map((item) => (
        <button key={item.title} onClick={item.onClick}>
          {item.title}
        </button>
      ))}
    </div>
  );
};
