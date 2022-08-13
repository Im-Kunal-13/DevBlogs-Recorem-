import React, { createContext, ReactNode, useContext, useState } from "react";
import { Blog, User } from "../types/index";

interface AppContextInterface {
  drawerActive: boolean;
  setDrawerActive: React.Dispatch<React.SetStateAction<boolean>>;
  loginModalActive: boolean;
  setLoginModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  logoutModalActive: boolean;
  setLogoutModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  registerModalActive: boolean;
  setRegisterModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  blogs: Blog[];
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
}
export const AppStateContext = createContext<AppContextInterface | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [drawerActive, setDrawerActive] = useState(false);
  const [loginModalActive, setLoginModalActive] = useState(false);
  const [logoutModalActive, setLogoutModalActive] = useState(false);
  const [registerModalActive, setRegisterModalActive] = useState(false);
  const [user, setUser] = useState<User>(JSON.parse("{}"));
  const [blogs, setBlogs] = useState<Blog[]>([]);

  return (
    <AppStateContext.Provider
      value={{
        drawerActive,
        setDrawerActive,
        loginModalActive,
        setLoginModalActive,
        logoutModalActive,
        setLogoutModalActive,
        registerModalActive,
        setRegisterModalActive,
        user,
        setUser,
        blogs,
        setBlogs,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
export const useAppStateContext = () => useContext(AppStateContext);
