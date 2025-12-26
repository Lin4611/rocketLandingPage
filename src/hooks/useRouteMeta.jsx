import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = import.meta.env.BASE_URL;

const routeMetaMap = {
  "/": {
    title: "Bootcamp Rocket",
    icon: `${BASE_URL}favicon-rocket-logo.ico`,
  },
  "/coworkingSpace": {
    title: "Co-working Space",
    icon: `${BASE_URL}favicon-hexschool-logo.ico`,
  },
};
const useRouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = routeMetaMap[pathname];
    if (!meta) return;
    document.title = meta.title;
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = meta.icon;
    }
  }, [pathname]);
};
export default useRouteMeta;