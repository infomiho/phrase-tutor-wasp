import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import useAuth from "@wasp/auth/useAuth";
import { Redirect } from "react-router-dom";
import { Loader } from "./components/Loader";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading: isUserLoading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (isUserLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {!user || user.role !== "admin" ? <Redirect to="/" /> : children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
