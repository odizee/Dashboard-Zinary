import { Routes, Route } from "react-router-dom";

import { DASHBOARD_ROUTE, WALLET_ROUTE, HOME_ROUTE } from "../utils/routes.js";
import Dashboard from "../pages/dashboard.js";
import AppLayout from "../Layout/AppLayout.js";
import Wallet from "../pages/wallet.js";
import NotFound from "../pages/notfound.js";

export const AppNavigation = () => {
  return (
    <Routes>
      {/* USER AUTHENTICATED ROUTES */}
      <Route path={HOME_ROUTE} element={<AppLayout />}>
        <Route path={HOME_ROUTE} element={<Wallet />} />
        <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
        <Route path={WALLET_ROUTE} element={<Wallet />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
