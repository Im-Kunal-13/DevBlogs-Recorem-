import React, { createContext, ReactNode, useContext, useState } from "react";

interface AppContextInterface {
  drawerActive: boolean;
  setDrawerActive: React.Dispatch<React.SetStateAction<boolean>>;
  loginModalActive: boolean;
  setLoginModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  registerModalActive: boolean;
  setRegisterModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AppStateContext = createContext<AppContextInterface | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [drawerActive, setDrawerActive] = useState(false);
  const [loginModalActive, setLoginModalActive] = useState(false);
  const [registerModalActive, setRegisterModalActive] = useState(false);

  return (
    <AppStateContext.Provider
      value={{
        drawerActive,
        setDrawerActive,
        loginModalActive,
        setLoginModalActive,
        registerModalActive,
        setRegisterModalActive,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
export const useAppStateContext = () => useContext(AppStateContext);
