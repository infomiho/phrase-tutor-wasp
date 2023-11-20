import { useLocation } from "react-router-dom";

import { Layout as AdminLayout } from "./admin/Layout";
import { Layout as UserLayout } from "./UserLayout";

export function Layout({ children }) {
  const location = useLocation();

  if (location.pathname.startsWith("/admin")) {
    return <AdminLayout>{children}</AdminLayout>;
  }

  return <UserLayout>{children}</UserLayout>;
}
