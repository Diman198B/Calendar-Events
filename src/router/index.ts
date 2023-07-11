import React from "react";
import Login from "../screens/Login";
import Event from "../screens/Event";

export interface Iroute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

export const publicRoutes: Iroute[] = [
  {
    path: RouteNames.LOGIN,
    exact: true,
    component: Login,
  },
];

export const privateRoutes: Iroute[] = [
  {
    path: RouteNames.EVENT,
    exact: true,
    component: Event,
  },
];
