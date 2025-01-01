import { redirect } from "react-router";
import FallbackLoading from "./components/ui/fallback-loading.jsx";

export const routeConfig = [
  {
    path: "/",
    loader: async () => redirect("/login"),
    id: "root",
    hydrateFallbackElement: <FallbackLoading />,
  },
  {
    path: "/login",
    lazy: () => import("./app/login/page.jsx"),
    hydrateFallbackElement: <FallbackLoading />,
  },
];
