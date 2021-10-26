import { Close } from "@mui/icons-material";
import { Alert, IconButton, Snackbar } from "@mui/material";
import React, {
  createContext,
  memo,
  ReactNode,
  useContext,
  useState,
} from "react";

export interface State {
  open: boolean;
  message: string;
  type: "info" | "error" | "success" | "warning" | "";
}
const defaultState: State = {
  open: false,
  message: "",
  type: "info",
};
interface SnackbarContextType {
  handleSnackbarSet: (message: string, type?: string) => void;
}

const defaultSnackbarContext: SnackbarContextType = {
  handleSnackbarSet: (message: string, type?: string) => {
    return null;
  },
};

const SnackBarContext = createContext<State>(defaultState);
const SnackbarSetContext = createContext<SnackbarContextType>(
  defaultSnackbarContext
);
type PropsContainer = {
  children: ReactNode;
};

type PropsProvider = {
  setSnackbarState: any;
  children: ReactNode;
};

const SnackbarProvider = memo(
  ({ setSnackbarState, children }: PropsProvider) => {
    const handleSnackbarSet = (message: string, type = "info") => {
      setSnackbarState({
        message,
        open: true,
        type,
      });
    };

    return (
      <SnackbarSetContext.Provider value={{ handleSnackbarSet }}>
        {children}
      </SnackbarSetContext.Provider>
    );
  }
);

SnackbarProvider.displayName = "snackbarProvider";

const SnackbarContainer = ({ children }: PropsContainer): any => {
  const [snackbarState, setSnackbarState] = useState<State>(defaultState);

  const handleClose = () => {
    setSnackbarState({ open: false, message: "", type: "" });
  };

  return (
    <SnackBarContext.Provider value={snackbarState}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarState.open}
        onClose={handleClose}
        key={"top-right"}
        autoHideDuration={1500}
      >
        <Alert
          severity={snackbarState.type || "info"}
          action={[
            <IconButton key="close" color="inherit" onClick={handleClose}>
              <Close />
            </IconButton>,
          ]}
        >
          {snackbarState.message ? snackbarState.message : null}
        </Alert>
      </Snackbar>
      <SnackbarProvider setSnackbarState={setSnackbarState}>
        {children}
      </SnackbarProvider>
    </SnackBarContext.Provider>
  );
};
const useSetSnackbar = (): SnackbarContextType =>
  useContext(SnackbarSetContext);
const useSnackBarState = (): State => useContext(SnackBarContext);
export { SnackbarContainer, useSnackBarState, useSetSnackbar };
