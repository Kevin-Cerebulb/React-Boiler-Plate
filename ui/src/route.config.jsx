import FallbackLoading from "./components/ui/fallback-loading.jsx";

export const routeConfig = [
  {
    path: "/",
    id: "root",
    hydrateFallbackElement: <FallbackLoading />,
  },
];
