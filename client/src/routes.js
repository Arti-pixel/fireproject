import Home from "./Pages/Home";
import Card from "./Pages/Card";
import Auth from "./Pages/Auth";

import {
  HOME_ROUTE,
  CARD_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  { path: HOME_ROUTE, Component: Home },
  { path: CARD_ROUTE + "/:cardId", Component: Card },
  { path: CARD_ROUTE + "/:cardId", Component: Card },
];

export const publicRoutes = [
  { path: LOGIN_ROUTE, Component: Auth },
  { path: REGISTRATION_ROUTE, Component: Auth },
];
