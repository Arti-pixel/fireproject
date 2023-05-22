import React, { useContext, createContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import homeGeneral from "../store/HomeGeneralStore";

export const GeneralContext = createContext(null);

const AppRouter = observer(() => {
  const { userInfo } = useContext(Context);

  return (
    <Routes>
      {userInfo.isAuth ? (
        authRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <GeneralContext.Provider value={{ homeGeneral }}>
                <Component />
              </GeneralContext.Provider>
            }
            exact
          />
        ))
      ) : (
        <Route element={<Navigate to={LOGIN_ROUTE} />} />
      )}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
});

export default AppRouter;
