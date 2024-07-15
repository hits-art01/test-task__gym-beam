import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { RouteType } from "../types";

const AppRouter: FC = () => {
  return (
    <Routes>
      {routes.map((route: RouteType) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
